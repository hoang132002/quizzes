import { Injectable, NotFoundException } from '@nestjs/common';
import { QuizEntity } from '../domains/entities/quiz.entity';
import { Repository, Equal, DataSource } from 'typeorm';
import { QuizRepository } from '../repositories/quiz.repository';
import { QuizDto } from '../domains/dtos/response/quiz.dto';
import { CreateQuiz } from '../domains/dtos/request/create-quiz.dto';
import { QuestionService } from 'src/modules/quiz/services/question.service';
import { UpdateQuiz } from '../domains/dtos/request/update-quiz.dto';
import { QuestionEntity } from '../domains/entities/question.entity';
import { CreateQuestionDto } from '../domains/dtos/request/create-question.dto';
import { UpdateQuestionDto } from '../domains/dtos/request/update-question.dto';

@Injectable()
export class QuizService {
  constructor(
    private readonly quizRepository: QuizRepository,
    private readonly questionService: QuestionService,
  ) {}

  async getQuiz(id: string): Promise<QuizDto> {
    const quiz = await this.quizRepository.findQuiz(id);
    if (!quiz) throw new NotFoundException('quiz not found');
    const result = new QuizDto(quiz);
    return result;
  }

  async getQuizEntity(id: string): Promise<QuizEntity> {
    const quiz = await this.quizRepository.findQuiz(id);
    if (!quiz) throw new NotFoundException('quiz not found');
    return quiz;
  }

  async createQuiz(createQuiz: CreateQuiz) {
    const newQuestions = await Promise.all(
      createQuiz.questions.map(
        async (item) => await this.questionService.createQuestion(item),
      ),
    );
    const quiz = await this.quizRepository.createQuiz(createQuiz, newQuestions);
    return new QuizDto(quiz);
  }

  // async updateQuiz(updateQuiz : UpdateQuiz){
  //     const quiz = await this.quizRepository.findQuiz(updateQuiz.id)
  //     if (!quiz) throw new NotFoundException('quiz not found');

  //     const updatedQuestion: QuestionEntity[] = [];
  //     for(let i = 0 ; i < updateQuiz.questions.length ; i++)
  //     {
  //         // const test = updateQuiz.questions[i].questionId
  //         // this.questionService.getQuestion(updateQuiz.questions[i].questionId);
  //         const result =  await this.questionService.updateQuestion(updateQuiz.questions[i])
  //         updatedQuestion.push(result)
  //     }
  //     this.quizRepository.updateQuiz(quiz, updateQuiz , updatedQuestion )

  // }

  async updateQuiz(updateQuiz: UpdateQuiz) {
    const quizEntity = await this.quizRepository.findQuiz(updateQuiz.id);
    if (!quizEntity) throw new NotFoundException('quiz not found');
    console.log("?????1 ", quizEntity)

    const listQuestion =
      await this.questionService.getQuestionsByQuizId(quizEntity);
      console.log("?????2 ", listQuestion)

    const updateList: UpdateQuestionDto[] = [];
    const createList: UpdateQuestionDto[] = [];

    // tim danh sach update va tao
    for (let i = 0; i <= updateQuiz.questions.length; i++) {
      for (let j = 0; j <= listQuestion.length; j++) {
        if (updateQuiz.questions[i]?.questionId == listQuestion[j]?.id)
          updateList.push(updateQuiz.questions[i]);
        else if (!updateQuiz.questions[i]?.questionId)
          createList.push(updateQuiz.questions[i]);
      }
    }

    console.log("?????2 ", updateList)
    console.log("?????3 ", createList)



    const notToDeletedIdList = updateList.map((item) => {
      return item?.questionId;
    });
    const deleteList = listQuestion.filter(
      (item) => !notToDeletedIdList.includes(item?.id),
    );
    console.log("?????4 ", deleteList)

    for (let i = 0; i <= createList.length; i++) {
      const createQuestion = new CreateQuestionDto(createList[i]?.content);
      await this.questionService.createQuestion(createQuestion);
    }
    console.log("?????5 ")


    for (let i = 0; i <= deleteList.length; i++) {
        if (!deleteList[i]?.id)
            continue;
        await this.questionService.deleteQuestion(deleteList[i].id);
      }

    console.log("????? ")


    // tim cac danh sach tao , xoa , update

    // const updateList = [],
    //   createList = [];
    // let  deleteList = [];

    // for (let i = 0; i <= updateQuiz.questions.length; i++) {
    //   for (let j = 0; j <= listQuestion.length; j++) {
    //     //neu ma co id thi la update
    //     if (updateQuiz.questions[i].questionId) {
    //       updateList.push(updateQuiz.questions[i]);
    //       listQuestion.splice(j, 1);

    //       //neu khong la create
    //     } else createList.push(updateQuiz.questions[i]);
    //   }

    // }
    // deleteList = listQuestion
    // for(let i = 0 ; i <= createList.length ; i++){

    //     this.questionService.createQuestion()
    // }

    const updateQuestions = await Promise.all(
      updateQuiz.questions.map(
        async (item) => await this.questionService.updateQuestion(item),
      ),
    );

    console.log("?????7 ", updateQuestions)

    const quiz = await this.quizRepository.updateQuiz(
      quizEntity,
      updateQuiz,
      updateQuestions,
    );

  console.log("?????8 ", quiz)

    return new QuizDto(quiz);
  }


  async deleteQuiz(id: string) {
    const quiz = await this.getQuizEntity(id);
    return this.quizRepository.deleteQuiz(quiz);
  }
}
