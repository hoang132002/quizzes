import { Injectable, NotFoundException } from "@nestjs/common";
import { QuestionRepository } from "../repositories/question.repository";
import { QuestionDto } from "../domains/dtos/question.dto";

@Injectable()
export class QuestionService{
    constructor(
        private readonly questionRepository: QuestionRepository,
      ) {}

    async getQuestion(id:string){
        console.log('???',{id})
        const question =await  this.questionRepository.findQuestion(id)
        console.log('???',{question})
        if(!question) throw new NotFoundException('not found')
        const result = new QuestionDto(question)
        return result
    }

}