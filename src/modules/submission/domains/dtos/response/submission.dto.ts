import { QuestionDto } from 'src/modules/quiz/domains/dtos/response/question.dto';
import { SubmissionEntity } from '../../entities/submission.entity';
import { AnswerDto } from './answer.dto';
import { QuizEntity } from 'src/modules/quiz/domains/entities/quiz.entity';
import { UserEntity } from 'src/modules/user/domains/entities/user.entity';
import { QuizDto } from 'src/modules/quiz/domains/dtos/response/quiz.dto';

export class SubmissionDto {
  id: string;
  quiz: QuizDto;
//   user : UserDto;
  answers: AnswerDto[];

  constructor(submission: SubmissionEntity){
    this.id = submission?.id
    this.answers = submission?.answers?.map((item)=>new AnswerDto(item))
    this.quiz = new QuizDto(submission?.quiz) 
}
}
