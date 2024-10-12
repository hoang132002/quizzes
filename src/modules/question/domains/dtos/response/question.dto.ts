import { AnswerDto } from 'src/modules/answer/domains/dtos/response/answer.dto';
import { QuizDto } from 'src/modules/quiz/domains/dtos/response/quiz.dto';
import { QuestionEntity } from '../../entities/question.entity';

export class QuestionDto {
  id: string;

  content: string;

  quiz: QuizDto;

  // answer : AnswerDto;

  constructor(entity:QuestionEntity){
    this.id=entity.id,
    this.content=entity.content
    // this.quiz=new QuizDto(entity.quiz)
    // this.answer=entity.answer
  }
}
