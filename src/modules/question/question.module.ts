import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionEntity } from './domains/entities/question.entity';


@Module({
  imports: [TypeOrmModule.forFeature([QuestionEntity])],
  controllers: [],
  providers: [],
  exports: [],
})
export class QuestionModule {}
