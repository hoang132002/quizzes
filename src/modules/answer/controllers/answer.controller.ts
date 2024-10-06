import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { AnswerService } from "../services/answer.service";
import { CreateAnswer } from "../domains/dtos/request/create-answer.dto";
import { UpdateAnswer } from "../domains/dtos/request/update-answer.dto";

@Controller('/v1/answers')
export class AnswerController {
  constructor(
    private readonly answerService: AnswerService,
  ) {}

  @Get('/:id')
  async getQuestion(@Param('id') id:string) {
     return this.answerService.getAnswer(id);  
}

@Post()
  createQuestion(@Body() createAnswer: CreateAnswer){
    return this.answerService.createAnswer(createAnswer )
  }

@Patch()
updateAnswer(@Body() updateAnswer : UpdateAnswer){
    return this.answerService.updateAnswer(updateAnswer)
}

@Delete('/:id')
async deleteAnswer(@Param('id') id:string) {
   return this.answerService.deleteAnswer(id);
}
}



