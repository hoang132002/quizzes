import { CreateQuestionDto } from "src/modules/question/domains/dtos/request/create-question.dto";

export class CreateQuiz{
    title: string;
    questions : CreateQuestionDto[];

}