import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionRepository } from '../quiz/repositories/question.repository';
import { QuizRepository } from '../quiz/repositories/quiz.repository';
import { QuestionService } from '../quiz/services/question.service';
import { QuizService } from '../quiz/services/quiz.service';
import { UserRepository } from '../user/repositories/user.repository';
import { UserService } from '../user/services/user.service';
import { SubmissionController } from './controllers/submission.controller';
import { AnswerDto } from './domains/dtos/response/answer.dto';
import { SubmissionDto } from './domains/dtos/response/submission.dto';
import { AnswerEntity } from './domains/entities/answer.entity';
import { SubmissionEntity } from './domains/entities/submission.entity';
import { AnswerRepository } from './repositories/answer.repository';
import { SubmissionRepository } from './repositories/submission.repository';
import { AnswerService } from './services/answer.service';
import { SubmissionService } from './services/submission.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SubmissionDto,
      SubmissionEntity,
      AnswerDto,
      AnswerEntity,
    ]),
  ],
  controllers: [SubmissionController],
  providers: [
    SubmissionService,
    SubmissionRepository,
    AnswerService,
    AnswerRepository,
    UserService,
    UserRepository,
    QuestionService,
    QuestionRepository,
    QuizService,
    QuizRepository,
  ],
  exports: [SubmissionService],
})
export class SubmissionModule {}
