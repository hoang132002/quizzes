import { QuizRepository } from "src/modules/quiz/repositories/quiz.repository";
import { SubmissionRepository } from "../repositories/submission.repository";
import { SubmissionEntity } from "../domains/entities/submission.entity";
import { SubmissionDto } from "../domains/dtos/response/submission.dto";
import { Injectable, NotFoundException } from "@nestjs/common";
import { CreateSubmissionDto } from "../domains/dtos/request/create-submission.dto";
import { AnswerRepository } from "../repositories/answer.repository";
import { AnswerService } from "./answer.service";
import { QuizService } from "src/modules/quiz/services/quiz.service";
import { UserService } from "src/modules/user/services/user.service";

@Injectable()
export class SubmissionService {
    constructor(
        private readonly submissionRepository: SubmissionRepository,
        private readonly answerService: AnswerService,
       private readonly quizService : QuizService ,
       private readonly userService : UserService
    ) { }

    async getSubmission(id : string) : Promise<SubmissionDto>
    {
        const submission = await this.submissionRepository.getSubmission(id);
        if (!submission) throw new NotFoundException('submission not found');
        const result = new SubmissionDto(submission);
        return result;

    }

    async createSubmission(createSubmission: CreateSubmissionDto) {
        const quizEntity = await this.quizService.getQuizEntity(createSubmission.quizId)
        const userEntity = await this.userService.getUserEntity(createSubmission.userId)
        const newAnswer =await Promise.all(createSubmission.answers.map(async (item) => await this.answerService.createAnswer(item)))
        const submission = await this.submissionRepository.createSubmission(createSubmission, newAnswer , quizEntity , userEntity);
        return new SubmissionDto(submission);
    }
}

