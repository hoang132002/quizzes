import { AnswerEntity } from 'src/modules/submission/domains/entities/answer.entity';
import { QuizEntity } from 'src/modules/quiz/domains/entities/quiz.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
  DeleteDateColumn
} from 'typeorm';
import { BaseEntity } from 'src/common/domain/base.entity';

@Entity({ name: 'question' })
export class QuestionEntity extends BaseEntity {
  // @PrimaryGeneratedColumn('uuid')
  // id: string;

  @DeleteDateColumn()
  deletedAt:Date 

  @Column({nullable:true})
  content: string;

  @ManyToOne(() => QuizEntity, (quiz) => quiz.questions)
  quiz: QuizEntity;

  @OneToOne(() => AnswerEntity, (answer) => answer.question)
  @JoinColumn()
  answer : AnswerEntity;
}
