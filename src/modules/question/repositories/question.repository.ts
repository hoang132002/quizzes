import { Injectable } from "@nestjs/common";
import { QuestionEntity } from "../domains/entities/question.entity";
import { Repository, Equal, DataSource } from 'typeorm';

@Injectable()
export class QuestionRepository extends Repository<QuestionEntity> {
  constructor(dataSource: DataSource) {
    super(QuestionEntity, dataSource.createEntityManager());
  }
  async findQuestion(id: string) {
    return this.findOne({ where: { id: Equal(id) } });
  }

  async createQuestion(content)
  {
    const question =  this.create({ content})
    return this.save(question)
  }
}
