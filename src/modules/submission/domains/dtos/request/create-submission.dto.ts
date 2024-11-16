import { UserDto } from 'src/modules/user/domains/dtos/response/user.dto';
import { CreateAnswer } from './create-answer.dto';
import { IsArray, IsString } from 'class-validator';

export class CreateSubmissionDto {
  @IsString()
  quizId: string;

  @IsArray()
  answers: CreateAnswer[];

}
