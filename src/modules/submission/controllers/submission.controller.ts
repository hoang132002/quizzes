import { Controller, Get, Param } from "@nestjs/common";
import { SubmissionService } from "../services/submission.service";


@Controller('/v1/submissions/')
export class SubmissionController {
  constructor(
    private readonly submissionService: SubmissionService,
  ) {}

@Get('/:id')
getSubmission(@Param('id') id : string){
 return this.submissionService.getSubmission(id);
}
  
}


