import { Injectable, NotFoundException } from "@nestjs/common";
import { AnswerRepository } from "../repositories/answer.repository";
import { AnswerDto } from "../domains/dtos/response/answer.dto";
import { UpdateAnswer } from "../domains/dtos/request/update-answer.dto";

@Injectable()
export class AnswerService {
    constructor(
        private readonly answerRepository: AnswerRepository,
    ) { }

    async getAnswer(id: string) {
        const answer = await this.answerRepository.findAnswer(id);
        if (!answer) throw new NotFoundException('not found');
        const result = new AnswerDto(answer);
        return result;

}
    async createAnswer(CreateAnswerDto){
        const answer = await this.answerRepository.createAnswer(CreateAnswerDto.id , CreateAnswerDto.content)
        return new AnswerDto(answer);
       }
    async updateAnswer(updateAnswerDto:UpdateAnswer){
        const answer = await this.answerRepository.findAnswer(updateAnswerDto.answerId);
        if (!answer) throw new NotFoundException('not found');
        return this.answerRepository.updateAnswer(answer,updateAnswerDto)

    }

    async deleteAnswer(id : string){
        return this.answerRepository.deleteAnswer(id)
    }
}