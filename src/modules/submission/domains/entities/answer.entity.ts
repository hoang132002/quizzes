import { QuestionEntity } from 'src/modules/quiz/domains/entities/question.entity';
import { UserEntity } from 'src/modules/user/domains/entities/user.entity';
import {
  Column,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SubmissionEntity } from './submission.entity';

@Entity({ name: 'answer' })
export class AnswerEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @DeleteDateColumn()
  deletedAt:Date 

  @OneToOne(() => QuestionEntity, (question) => question.answer)
  @JoinColumn()
  question: QuestionEntity;

  @ManyToOne(() => UserEntity, (user) => user.answers)
  user: UserEntity;

  @ManyToOne(() => SubmissionEntity, (submission) => submission.answers )
  submission: SubmissionEntity;

}
