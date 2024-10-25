import { Injectable } from "@nestjs/common";
import { Repository, Equal, DataSource } from 'typeorm';
import { UserEntity } from "../domains/entities/user.entity";

@Injectable()
export class UserRepository extends Repository<UserEntity> {
    constructor(dataSource: DataSource) {
        super(UserEntity, dataSource.createEntityManager());
    }

    getUser(id : string): Promise<UserEntity>{
        return this.findOne({
            where: { id: Equal(id) },
          });
      }

      
}