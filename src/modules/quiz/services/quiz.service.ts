import { Injectable, NotFoundException } from "@nestjs/common";
import { QuizEntity } from "../domains/entities/quiz.entity";
import { Repository, Equal, DataSource } from 'typeorm';
import { QuizRepository } from "../repositories/quiz.repository";
import { QuizDto } from "../domains/dtos/response/quiz.dto";
import { CreateQuiz } from "../domains/dtos/request/create-quiz.dto";
import { QuestionService } from "src/modules/quiz/services/question.service";
import { UpdateQuiz } from "../domains/dtos/request/update-quiz.dto";
import { QuestionEntity } from "../domains/entities/question.entity";

@Injectable()
export class QuizService {
    constructor(
        private readonly quizRepository: QuizRepository,
        private readonly questionService: QuestionService
    ) { }

    async getQuiz(id: string): Promise<QuizDto> {
        const quiz = await this.quizRepository.findQuiz(id);
        if (!quiz) throw new NotFoundException('quiz not found');
        const result = new QuizDto(quiz);
        return result;

    }

    async createQuiz(createQuiz: CreateQuiz) {
        const newQuestions =await Promise.all(createQuiz.questions.map(async (item) => await this.questionService.createQuestion(item)))
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
    //         const result = await this.questionService.updateQuestion(updateQuiz.questions[i])
    //         updatedQuestion.push(result)
    //     }
    //     this.quizRepository.updateQuiz(quiz, updateQuiz , updatedQuestion )
       
    // }

    async updateQuiz(updateQuiz : UpdateQuiz){
        const idQuiz = await this.quizRepository.findQuiz(updateQuiz.id)
        if (!idQuiz) throw new NotFoundException('quiz not found');
        const updateQuestions =await Promise.all(updateQuiz.questions.map(async (item) => await this.questionService.updateQuestion(item)))
        const quiz = await this.quizRepository.updateQuiz(idQuiz ,updateQuiz, updateQuestions);
        return new QuizDto(quiz);

    }
}