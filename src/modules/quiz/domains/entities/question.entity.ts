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

@Entity({ name: 'question' })
export class QuestionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @DeleteDateColumn()
  deletedAt:Date 

  @Column()
  content: string;

  @ManyToOne(() => QuizEntity, (quiz) => quiz.questions)
  quiz: QuizEntity;

  @OneToOne(() => AnswerEntity, (answer) => answer.question)
  @JoinColumn()
  answer : AnswerEntity;
}
