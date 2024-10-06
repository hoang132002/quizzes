
import { Repository, Equal, DataSource } from 'typeorm';
import { AnswerEntity } from "../domains/entities/answer.entity";
import { Injectable } from '@nestjs/common';
import { UpdateAnswer } from '../domains/dtos/request/update-answer.dto';

@Injectable()
export class AnswerRepository extends Repository<AnswerEntity> {
    constructor(dataSource: DataSource) {
      super(AnswerEntity, dataSource.createEntityManager());
    }

    async findAnswer(id: string) {
        return this.findOne({ where: { id: Equal(id) } });
      }
    async createAnswer(id : string , content : string){
        const answer = await  this.create({ id ,content})
        return this.save(answer)
    }

    updateAnswer(answer:AnswerEntity , updateAnswer:UpdateAnswer){
        answer.content = updateAnswer.content
        return this.save(answer)
    }
    deleteAnswer(id : string){
        return this.softDelete(id)
    }
}