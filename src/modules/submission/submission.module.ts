import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { SubmissionDto } from "./domains/dtos/response/submission.dto";
import { SubmissionEntity } from "./domains/entities/submission.entity";
import { SubmissionController } from "./controllers/submission.controller";
import { SubmissionService } from "./services/submission.service";
import { SubmissionRepository } from "./repositories/submission.repository";
import { AnswerDto } from "./domains/dtos/response/answer.dto";


@Module({
    imports: [TypeOrmModule.forFeature([SubmissionDto,SubmissionEntity])],
    controllers: [SubmissionController],
    providers: [SubmissionService, SubmissionRepository,  ],
    exports: [SubmissionService],
  })
  export class SubmissionModule {}