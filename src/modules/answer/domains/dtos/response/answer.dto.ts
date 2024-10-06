import { QuestionDto } from 'src/modules/question/domains/dtos/response/question.dto';
import { QuestionEntity } from 'src/modules/question/domains/entities/question.entity';
import { UserDto } from 'src/modules/user/domains/dtos/user.dto';
import { UserEntity } from 'src/modules/user/domains/entities/user.entity';

export class AnswerDto {
  id: string;

  content: string;

  question: QuestionDto;

  user: UserDto;

  constructor(entity){
    this.id=entity.id,
    this.content=entity.content
    // this.answer=entity.answer
  }
}
