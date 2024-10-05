import { Body, Controller, Get, Param, Post, Query } from "@nestjs/common";
import { QuestionService } from "../services/question.service";
import { CreateQuestionDto } from "../domains/dtos/request/create-question.dto";
import { UpdateQuestionDto } from "../domains/dtos/request/update-question.dto";

@Controller('/v1/questions')
export class QuestionController {
  constructor(
    private readonly questionService: QuestionService,
  ) {}

  @Get('/:id')
   async getQuestion(@Param('id') id:string) {
      return this.questionService.getQuestion(id);  
  }
  @Post()
  createQuestion(@Body() createQuestionDto: CreateQuestionDto){
    return this.questionService.createQuestion(createQuestionDto )
  }

  updateQuestion(@Body() updateQuestion : UpdateQuestionDto){
    return this.questionService.updateQuestion(updateQuestion)
  }
}

