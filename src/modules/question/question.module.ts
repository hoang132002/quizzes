import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionEntity } from './domains/entities/question.entity';
import { QuestionController } from './controllers/question.controller';
import { QuestionRepository } from './repositories/question.repository';
import { QuestionService } from './services/question.service';
import { QuizService } from '../quiz/services/quiz.service';
import { QuizModule } from '../quiz/quiz.module';
import { QuizRepository } from '../quiz/repositories/quiz.repository';


@Module({
  imports: [TypeOrmModule.forFeature([QuestionEntity])],
  controllers: [QuestionController],
  providers: [QuestionRepository, QuestionService],
  exports: [QuestionRepository, QuestionService],
})
export class QuestionModule {}
