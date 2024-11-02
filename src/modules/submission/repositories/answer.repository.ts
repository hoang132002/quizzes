import { Injectable } from '@nestjs/common';
import { AnswerEntity } from '../domains/entities/answer.entity';
import { Repository, Equal, DataSource } from 'typeorm';
import { CreateAnswer } from '../domains/dtos/request/create-answer.dto';

@Injectable()
export class AnswerRepository extends Repository<AnswerEntity> {
  constructor(dataSource: DataSource) {
    super(AnswerEntity, dataSource.createEntityManager());
  }
  async findAnswer(id: string) {
    return this.findOne({
      where: { id: Equal(id) },
      relations: { submission: true },
    });
  }

  async createAnswer(createAnswer: CreateAnswer) {
    const answer = this.create()
    answer.content = createAnswer.content
    return this.save(answer)
  }

}
