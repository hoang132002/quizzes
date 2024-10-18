import { CreateQuestionDto } from "src/modules/quiz/domains/dtos/request/create-question.dto";

export class CreateQuiz{
    title: string;
    questions : CreateQuestionDto[];

}