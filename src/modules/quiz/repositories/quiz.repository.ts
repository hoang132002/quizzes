import { Injectable } from "@nestjs/common";
import { QuizEntity } from "../domains/entities/quiz.entity";
import { Repository, Equal, DataSource } from 'typeorm';
import { CreateQuiz } from "../domains/dtos/request/create-quiz.dto";
import { QuestionEntity } from "src/modules/question/domains/entities/question.entity";

@Injectable()
export class QuizRepository extends Repository<QuizEntity> {
    constructor(dataSource: DataSource) {
        super(QuizEntity, dataSource.createEntityManager());
    }

    findQuiz(id: string) {
        return this.findOne({ where: { id: Equal(id) }, relations: { questions: true } });
    }

    createQuiz(createQuiz: CreateQuiz, questions: QuestionEntity[]) {
        // const quiz = this.create({...createQuiz})
        const quiz = this.create()
        quiz.title = createQuiz.title
        quiz.questions = questions
        return this.save(quiz)
    }
}