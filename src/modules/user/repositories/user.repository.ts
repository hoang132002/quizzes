import { Injectable } from '@nestjs/common';
import { Repository, Equal, DataSource } from 'typeorm';
import { UserEntity } from '../domains/entities/user.entity';
import { CreateUserDto } from '../domains/dtos/request/create-user.dto';
import { UpdateUserDto } from '../domains/dtos/request/update-user.dto';

@Injectable()
export class UserRepository extends Repository<UserEntity> {
  constructor(dataSource: DataSource) {
    super(UserEntity, dataSource.createEntityManager());
  }

  getUser(id: string): Promise<UserEntity> {
    return this.findOne({
      where: { id: Equal(id) },
    });
  }

  getUserByUserName(username: string): Promise<UserEntity> {
    return this.findOne({
      where: { username: Equal(username) },
    });
  }

  async createUser(createUser: CreateUserDto) {
    const user = this.create();
    user.name = createUser.name;
    user.username = createUser.username;
    user.password = createUser.password;
    return this.save(user);
  }

  async updateUser(
    user: UserEntity,
    updateUser: UpdateUserDto,
  ): Promise<UserEntity> {
    user.name = updateUser.name;
    return this.save(user);
  }
}
