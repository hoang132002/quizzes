import { QuizEntity } from 'src/modules/quiz/domains/entities/quiz.entity';
import { UserEntity } from 'src/modules/user/domains/entities/user.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AnswerEntity } from './answer.entity';

@Entity({ name: 'submission' })
export class SubmissionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ManyToOne(() => UserEntity, (user) => user.submissions)
  user: UserEntity;

  @ManyToOne(() => QuizEntity, (quiz) => quiz.submissions)
  quiz: QuizEntity;

  @OneToMany(() =>AnswerEntity,(answer) => answer.submission)
  answers: AnswerEntity[];
}
