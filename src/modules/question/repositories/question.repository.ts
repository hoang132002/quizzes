import { Injectable } from "@nestjs/common";
import { QuestionEntity } from "../domains/entities/question.entity";
import {Repository, Equal} from 'typeorm'

@Injectable()
export class QuestionRepository extends Repository<QuestionEntity> {

    async findQuestion(id:string){
        const result =await this.findOne({where:{id: Equal(id)}})
        console.log('///', {result})
        return result
    }

}
