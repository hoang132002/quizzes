import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { QuizService } from "../services/quiz.service";
import { CreateQuiz } from "../domains/dtos/request/create-quiz.dto";


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
}