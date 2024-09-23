import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { QuestionService } from "../services/question.service";

@Controller('/v1/question')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
  ) {}

  @Get()
   async getQuestion(@Query() id:string) {
    console.log('qq',{id})
      return this.questionService.getQuestion(id);  
  }}

