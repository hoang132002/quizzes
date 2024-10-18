import { QuizRepository } from "src/modules/quiz/repositories/quiz.repository";
import { SubmissionRepository } from "../repositories/submission.repository";
import { SubmissionEntity } from "../domains/entities/submission.entity";
import { SubmissionDto } from "../domains/dtos/response/submission.dto";
import { Injectable, NotFoundException } from "@nestjs/common";

@Injectable()
export class SubmissionService {
    constructor(
        private readonly submissionRepository: SubmissionRepository,
       
    ) { }

    async getSubmission(id : string) : Promise<SubmissionDto>
    {
        const submission = await this.submissionRepository.getSubmission(id);
        if (!submission) throw new NotFoundException('submission not found');
        const result = new SubmissionDto(submission);
        return result;

    }
}

