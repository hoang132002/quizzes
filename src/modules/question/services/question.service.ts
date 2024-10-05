import { Injectable, NotFoundException } from '@nestjs/common';
import { QuestionRepository } from '../repositories/question.repository';
import { QuestionDto } from '../domains/dtos/response/question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal } from 'typeorm';

@Injectable()
export class QuestionService {
    constructor(
        private readonly questionRepository: QuestionRepository,
    ) { }

    async getQuestion(id: string) {
        const question = await this.questionRepository.findQuestion(id);
        if (!question) throw new NotFoundException('not found');
        const result = new QuestionDto(question);
        return result;
    }

    async createQuestion(createQuestionDto) {
        // const quiz = this.quizService.getQuiz(quizId)
        const question = await this.questionRepository.createQuestion(createQuestionDto.content )
        return  new QuestionDto(question);
       
    }

    updateQuestion(){

    }
}
