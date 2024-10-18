import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { QuizEntity } from "./domains/entities/quiz.entity";
import { QuizController } from "./controllers/quiz.controller";
import { QuizRepository } from "./repositories/quiz.repository";
import { QuizService } from "./services/quiz.service";
import { QuestionRepository } from "./repositories/question.repository";
import { QuestionService } from "./services/question.service";
import { QuestionEntity } from "./domains/entities/question.entity";

@Module({
    imports: [TypeOrmModule.forFeature([QuizEntity,QuestionEntity])],
    controllers: [QuizController],
    providers: [QuizRepository, QuizService, QuestionRepository, QuestionService ],
    exports: [QuizService],
  })
  export class QuizModule {}