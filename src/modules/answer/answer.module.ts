import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { AnswerEntity } from "./domains/entities/answer.entity";
import { AnswerController } from "./controllers/answer.controller";
import { AnswerRepository } from "./repositories/answer.repository";
import { AnswerService } from "./services/answer.service";

@Module({
    imports: [TypeOrmModule.forFeature([AnswerEntity])],
    controllers: [AnswerController],
    providers: [AnswerRepository, AnswerService],
    exports: [],
  })
  export class AnswerModule {}