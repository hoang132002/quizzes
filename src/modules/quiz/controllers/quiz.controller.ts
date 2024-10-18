import { Body, Controller, Get, Param, Patch, Post } from "@nestjs/common";
import { QuizService } from "../services/quiz.service";
import { CreateQuiz } from "../domains/dtos/request/create-quiz.dto";
import { UpdateQuiz } from "../domains/dtos/request/update-quiz.dto";


@Controller('/v1/quizzes/')
export class QuizController {
  constructor(
    private readonly quizService : QuizService,
  ) {}

@Get('/:id')
getQuiz(@Param('id') id : string){
    return this.quizService.getQuiz(id);
}

@Post()
createQuiz(@Body() createQuiz : CreateQuiz){
    return this.quizService.createQuiz(createQuiz);
}

@Patch()
updateQuiz(@Body() updateQuiz : UpdateQuiz){
  return this.quizService.updateQuiz(updateQuiz);
}
}