import { Injectable, NotFoundException } from '@nestjs/common';
import { QuestionRepository } from '../repositories/question.repository';
import { QuestionDto } from '../domains/dtos/response/question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal } from 'typeorm';
import { QuizService } from 'src/modules/quiz/services/quiz.service';

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
        return this.questionRepository.createQuestion(createQuestionDto )
    }

    async updateQuestion(updateQuestion){
        const question = await this.questionRepository.findQuestion(updateQuestion.questionId);
        if (!question) throw new NotFoundException('not found');
        return this.questionRepository.updateQuestion(question, updateQuestion)
    }

    deleteQuestion(id){
        return this.questionRepository.deleteQuestion(id)
    }


}
