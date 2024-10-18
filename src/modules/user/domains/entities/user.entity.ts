import { AnswerEntity } from 'src/modules/submission/domains/entities/answer.entity';
import { SubmissionEntity } from 'src/modules/submission/domains/entities/submission.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'user' })
export class UserEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @OneToMany(() => AnswerEntity, (answer) => answer.user)
  answers: AnswerEntity[];

  @OneToMany(() => SubmissionEntity, (submission) => submission.user)
  submissions: SubmissionEntity[];
}
