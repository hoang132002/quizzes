import { QuestionEntity } from 'src/modules/quiz/domains/entities/question.entity';
import { SubmissionEntity } from 'src/modules/submission/domains/entities/submission.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export class BaseEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @CreateDateColumn()
  createdAt!: Date;

  @UpdateDateColumn()
  updatedAt!: Date;

  // Add this column to your entity!
  @DeleteDateColumn()
  deletedAt?: Date;



}
