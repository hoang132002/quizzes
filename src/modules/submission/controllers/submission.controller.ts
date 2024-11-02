import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { SubmissionService } from "../services/submission.service";
import { CreateSubmissionDto } from "../domains/dtos/request/create-submission.dto";


@Controller('/v1/submissions/')
export class SubmissionController {
  constructor(
    private readonly submissionService: SubmissionService,
  ) {}

@Get('/:id')
getSubmission(@Param('id') id : string){
 return this.submissionService.getSubmission(id);
}

@Post()
createSubmission(@Body() createSubmission : CreateSubmissionDto){
    return this.submissionService.createSubmission(createSubmission);
}
  
}


