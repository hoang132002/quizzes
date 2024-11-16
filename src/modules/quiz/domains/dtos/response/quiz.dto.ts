import { QuestionDto } from 'src/modules/quiz/domains/dtos/response/question.dto';
import { QuestionEntity } from 'src/modules/quiz/domains/entities/question.entity';
import { QuizEntity } from '../../entities/quiz.entity';
import { BaseDto } from 'src/common/domain/dtos/base.dto';

export class QuizDto extends BaseDto {
  

  title : string;
  questions: QuestionDto[];

  constructor(entity: QuizEntity){
    super(entity)
    this.id=entity?.id
    this.questions = entity?.questions?.map((item)=>new QuestionDto(item))
    this.title = entity?.title
}}
