import { Injectable } from "@nestjs/common";
import { QuestionEntity } from "../domains/entities/question.entity";
import { Repository, Equal, DataSource } from 'typeorm';
import { CreateQuestionDto } from "../domains/dtos/request/create-question.dto";

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
