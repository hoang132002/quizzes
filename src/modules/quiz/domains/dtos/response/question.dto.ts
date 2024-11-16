import { AnswerDto } from 'src/modules/submission/domains/dtos/response/answer.dto';
import { QuizDto } from 'src/modules/quiz/domains/dtos/response/quiz.dto';
import { QuestionEntity } from '../../entities/question.entity';
import { BaseDto } from 'src/common/domain/dtos/base.dto';

export class QuestionDto extends BaseDto {

  content: string;

  quiz: QuizDto;

  // answer : AnswerDto;

  constructor(entity:QuestionEntity){
    super(entity)
    this.id=entity.id,
    this.content=entity.content
    // this.quiz=new QuizDto(entity.quiz)
    // this.answer=entity.answer
  }
}
