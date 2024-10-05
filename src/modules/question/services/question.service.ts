import { Injectable, NotFoundException } from '@nestjs/common';
import { QuestionRepository } from '../repositories/question.repository';
import { QuestionDto } from '../domains/dtos/question.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Equal } from 'typeorm';

@Injectable()
export class QuestionService {
  constructor(
    private readonly questionRepository: QuestionRepository,
  ) {}

  async getQuestion(id: string) {
     const question = await this.questionRepository.findQuestion(id);
    if (!question) throw new NotFoundException('not found');
    const result = new QuestionDto(question);
    return result;
  }
}
