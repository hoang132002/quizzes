import { Injectable, NotFoundException } from "@nestjs/common";
import { QuizEntity } from "../domains/entities/quiz.entity";
import { Repository, Equal, DataSource } from 'typeorm';
import { QuizRepository } from "../repositories/quiz.repository";
import { QuizDto } from "../domains/dtos/response/quiz.dto";
import { CreateQuiz } from "../domains/dtos/request/create-quiz.dto";
import { QuestionService } from "src/modules/question/services/question.service";

@Injectable()
export class QuizService {
    constructor(
        private readonly quizRepository: QuizRepository,
        private readonly questionService: QuestionService
    ) { }

    async getQuiz(id: string) {
        const quiz = await this.quizRepository.findQuiz(id);
        if (!quiz) throw new NotFoundException('quiz not found');
        const result = new QuizDto(quiz);
        return result;

    }

    async createQuiz(createQuiz: CreateQuiz) {
        const newQuestions =await Promise.all(createQuiz.questions.map(async (item) => await this.questionService.createQuestion(item)))
        const quiz = await this.quizRepository.createQuiz(createQuiz, newQuestions);
        return new QuizDto(quiz);
    }
}