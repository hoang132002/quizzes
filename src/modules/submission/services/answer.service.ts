import { Injectable, NotFoundException } from "@nestjs/common";
import { AnswerRepository } from "../repositories/answer.repository";
import { AnswerDto } from "../domains/dtos/response/answer.dto";
import { CreateAnswer } from "../domains/dtos/request/create-answer.dto";

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

    async createAnswer(createAnswer : CreateAnswer) {
        return this.answerRepository.createAnswer(createAnswer )
    }
}