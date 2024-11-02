import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubmissionDto } from "./domains/dtos/response/submission.dto";
import { SubmissionEntity } from "./domains/entities/submission.entity";
import { SubmissionController } from "./controllers/submission.controller";
import { SubmissionService } from "./services/submission.service";
import { SubmissionRepository } from "./repositories/submission.repository";
import { AnswerDto } from "./domains/dtos/response/answer.dto";
import { AnswerEntity } from "./domains/entities/answer.entity";
import { AnswerService } from "./services/answer.service";
import { AnswerRepository } from "./repositories/answer.repository";
import { QuizDto } from "../quiz/domains/dtos/response/quiz.dto";
import { QuizEntity } from "../quiz/domains/entities/quiz.entity";
import { QuizService } from "../quiz/services/quiz.service";
import { QuizRepository } from "../quiz/repositories/quiz.repository";
import { QuestionService } from "../quiz/services/question.service";
import { QuestionRepository } from "../quiz/repositories/question.repository";
import { UserService } from "../user/services/user.service";
import { UserRepository } from "../user/repositories/user.repository";


@Module({
    imports: [TypeOrmModule.forFeature([SubmissionDto,SubmissionEntity,AnswerDto , AnswerEntity ])],
    controllers: [SubmissionController],
    providers: [SubmissionService, SubmissionRepository, AnswerService , AnswerRepository ,UserService , UserRepository, QuestionService , QuestionRepository , QuizService , QuizRepository ],
    exports: [SubmissionService],
  })
  export class SubmissionModule {}