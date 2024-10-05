import { Controller, Get, Param, Post, Query } from "@nestjs/common";
import { QuestionService } from "../services/question.service";

@Controller('/v1/questions')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
  ) {}

  @Get('/:id')
   async getQuestion(@Param() id:string) {
    console.log('qq',{id})
      return this.questionService.getQuestion(id);  
  }}

