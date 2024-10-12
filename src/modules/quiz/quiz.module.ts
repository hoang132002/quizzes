import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuizEntity } from "./domains/entities/quiz.entity";
import { QuizController } from "./controllers/quiz.controller";
import { QuizRepository } from "./repositories/quiz.repository";
import { QuizService } from "./services/quiz.service";
import { QuestionModule } from "../question/question.module";
import { QuestionRepository } from "../question/repositories/question.repository";
import { QuestionService } from "../question/services/question.service";

@Module({
    imports: [TypeOrmModule.forFeature([QuizEntity]), QuestionModule],
    controllers: [QuizController],
    providers: [QuizRepository, QuizService, QuestionRepository, QuestionService],
    exports: [QuizService],
  })
  export class QuizModule {}