import { Injectable } from "@nestjs/common";
import { QuizEntity } from "../domains/entities/quiz.entity";
import { Repository, Equal, DataSource } from 'typeorm';
import { CreateQuiz } from "../domains/dtos/request/create-quiz.dto";
import { QuestionEntity } from "src/modules/quiz/domains/entities/question.entity";
import { UpdateQuiz } from "../domains/dtos/request/update-quiz.dto";

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

    updateQuiz(quiz: QuizEntity, updateQuiz : UpdateQuiz , questions : QuestionEntity[]){
        quiz.questions = questions
        quiz.title = updateQuiz.title
        return this.save(quiz)
    }
}