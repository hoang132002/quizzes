import { Injectable } from "@nestjs/common";
import { SubmissionEntity } from "../domains/entities/submission.entity";
import { Repository, Equal, DataSource } from 'typeorm';

@Injectable()
export class SubmissionRepository extends Repository<SubmissionEntity> {
    constructor(dataSource: DataSource) {
        super(SubmissionEntity, dataSource.createEntityManager());
    }

    getSubmission(id : string): Promise<SubmissionEntity>{
            return this.findOne({
              where: { id: Equal(id) },
              relations: { quiz: true, answers:true }
            });
          }

    }
