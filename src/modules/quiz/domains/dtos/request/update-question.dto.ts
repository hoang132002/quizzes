import { AnswerDto } from 'src/modules/submission/domains/dtos/response/answer.dto';
import { QuizDto } from 'src/modules/quiz/domains/dtos/response/quiz.dto';

export class UpdateQuestionDto {

  questionId : string;

  content: string;

  // quiz: QuizDto;

  // answer : AnswerDto;

  }

