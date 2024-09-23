import { QuestionEntity } from 'src/modules/question/domains/entities/question.entity';

export class QuizDto {
  id: string;

  questions: QuestionEntity[];

  submissions: QuestionEntity[];
}
