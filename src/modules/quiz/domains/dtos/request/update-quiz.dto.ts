import { CreateQuestionDto } from "src/modules/quiz/domains/dtos/request/create-question.dto";
import { UpdateQuestionDto } from "./update-question.dto";
import { CreateQuiz } from "./create-quiz.dto";

export class UpdateQuiz extends CreateQuiz{
    id : string;
    // title: string;
    questions : UpdateQuestionDto[];

}