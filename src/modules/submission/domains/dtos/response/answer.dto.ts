import { BaseDto } from 'src/common/domain/dtos/base.dto';
import { QuestionDto } from 'src/modules/quiz/domains/dtos/response/question.dto';
import { QuestionEntity } from 'src/modules/quiz/domains/entities/question.entity';
import { UserEntity } from 'src/modules/user/domains/entities/user.entity';
import { AnswerEntity } from '../../entities/answer.entity';
import { UserDto } from 'src/modules/user/domains/dtos/response/user.dto';

export class AnswerDto extends BaseDto {
  id: string;

  content: string;

  question: QuestionDto;

  user: UserDto;

  submissionId : string;

  constructor(entity : AnswerEntity){
    super(entity)
    this.id=entity.id,
    this.content=entity.content
    // this.answer=entity.answer
  }
}
