import { Injectable } from "@nestjs/common";
import { QuestionEntity } from "../domains/entities/question.entity";
import { Repository, Equal, DataSource } from 'typeorm';
import { CreateQuestionDto } from "../domains/dtos/request/create-question.dto";
import { QuizEntity } from "../domains/entities/quiz.entity";

@Injectable()
export class QuestionRepository extends Repository<QuestionEntity> {
  constructor(dataSource: DataSource) {
    super(QuestionEntity, dataSource.createEntityManager());
  }
  async findQuestion(id: string) {
    return this.findOne({
      where: { id: Equal(id) },
      relations: { quiz: true }
    });
  }

  async findAllQuestionByQuizId(quizEntity : QuizEntity){
    const result = await  this.findBy({ quiz: { id: quizEntity.id } })
    console.log("?????123 ", result)

    return result
  }

  async createQuestion(createQuestionDto: CreateQuestionDto) {
    const question = this.create()
    question.content = createQuestionDto.content
    return this.save(question)
  }

  updateQuestion(question : QuestionEntity, updateQuestion) : Promise<QuestionEntity>{
    question.content = updateQuestion.content
    return this.save(question)
  }

  deleteQuestion(id) {
    return this.softDelete(id)
  }
}
