import { QuestionEntity } from 'src/modules/quiz/domains/entities/question.entity';
import { SubmissionEntity } from 'src/modules/submission/domains/entities/submission.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'quiz' })
export class QuizEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({nullable:true})
  title: string;

  @OneToMany(() => QuestionEntity, (question) => question.quiz)
  questions: QuestionEntity[];

  @OneToMany(() => SubmissionEntity, (submission) => submission.quiz)
  submissions: SubmissionEntity[];
}
