import { Body, Controller, Get, Param, Patch, Post, UseGuards } from "@nestjs/common";
import { QuizService } from "../services/quiz.service";
import { CreateQuiz } from "../domains/dtos/request/create-quiz.dto";
import { UpdateQuiz } from "../domains/dtos/request/update-quiz.dto";
import { JwtAuthGuard } from "src/modules/auth/guards/jwt-auth.guard";


@Controller('/v1/quizzes/')
export class QuizController {
  constructor(
    private readonly quizService : QuizService,
  ) {}

@UseGuards(JwtAuthGuard)
@Get('/:id')
getQuiz(@Param('id') id : string){
    return this.quizService.getQuiz(id);
}

@UseGuards(JwtAuthGuard)
@Post()
createQuiz(@Body() createQuiz : CreateQuiz){
    return this.quizService.createQuiz(createQuiz);
}

@UseGuards(JwtAuthGuard)
@Patch()
updateQuiz(@Body() updateQuiz : UpdateQuiz){
  return this.quizService.updateQuiz(updateQuiz);
}
}