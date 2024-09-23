import { Injectable } from "@nestjs/common";
import { QuestionEntity } from "../domains/entities/question.entity";
import {Repository} from 'typeorm'

@Injectable()
export class QuestionRepository extends Repository<QuestionEntity> {

    async findQuestion(id:string){
        return this.findOneBy({id})
    }

}