import { AnswerDto } from 'src/modules/answer/domains/dtos/response/answer.dto';
import { QuizDto } from 'src/modules/quiz/domains/dtos/quiz.dto';

export class QuestionDto {
  id: string;

  content: string;

  // quiz: QuizDto;

  // answer : AnswerDto;

  constructor(entity){
    this.id=entity.id,
    this.content=entity.content
    // this.answer=entity.answer
  }
}
