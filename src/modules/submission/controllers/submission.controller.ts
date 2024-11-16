import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { SubmissionService } from '../services/submission.service';
import { CreateSubmissionDto } from '../domains/dtos/request/create-submission.dto';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';
import { AuthUser } from 'src/common/decorators/auth-user.decorator';
import { UserResponse } from 'src/modules/auth/domains/dtos/response/user.response.dto';

@Controller('/v1/submissions/')
export class SubmissionController {
  constructor(private readonly submissionService: SubmissionService) {}
  
  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getSubmission(@Param('id') id: string) {
    return this.submissionService.getSubmission(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createSubmission(
    @Body() createSubmission: CreateSubmissionDto,
    @AuthUser() user: UserResponse,
  ) {
    console.log("???", user)
    return this.submissionService.createSubmission(createSubmission, user);
  }
}
