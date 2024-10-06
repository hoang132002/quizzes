import { QuestionEntity } from 'src/modules/question/domains/entities/question.entity';
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
}
