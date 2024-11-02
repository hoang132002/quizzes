import { Injectable } from '@nestjs/common';
import { SubmissionEntity } from '../domains/entities/submission.entity';
import { Repository, Equal, DataSource } from 'typeorm';
import { CreateAnswer } from '../domains/dtos/request/create-answer.dto';
import { CreateSubmissionDto } from '../domains/dtos/request/create-submission.dto';
import { AnswerEntity } from '../domains/entities/answer.entity';
import { QuizEntity } from 'src/modules/quiz/domains/entities/quiz.entity';
import { UserEntity } from 'src/modules/user/domains/entities/user.entity';

@Injectable()
export class SubmissionRepository extends Repository<SubmissionEntity> {
  constructor(dataSource: DataSource) {
    super(SubmissionEntity, dataSource.createEntityManager());
  }

  getSubmission(id: string): Promise<SubmissionEntity> {
    return this.findOne({
      where: { id: Equal(id) },
      relations: { quiz: true, answers: true },
    });
  }

  createSubmission(createSubmission: CreateSubmissionDto, answers: AnswerEntity[] , quizEntity : QuizEntity , userEntity : UserEntity) {
    // const quiz = this.create({...createQuiz})
    const submission = this.create()
    submission.quiz = quizEntity
    submission.answers = answers
    submission.user = userEntity
    return this.save(submission)
}
}
