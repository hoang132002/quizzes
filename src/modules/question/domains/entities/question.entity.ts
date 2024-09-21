import { AnswerEntity } from 'src/modules/answer/domains/entities/answer.entity';
import { QuizEntity } from 'src/modules/quiz/domains/entities/quiz.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  OneToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: 'question' })
export class QuestionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  content: string;

  @ManyToOne(() => QuizEntity, (quiz) => quiz.questions)
  quiz: QuizEntity;

  @OneToOne(() => AnswerEntity, (answer) => answer.question)
  @JoinColumn()
  answer : AnswerEntity;
}
