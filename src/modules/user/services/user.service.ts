import { Injectable, NotFoundException } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { UserDto } from '../domains/dtos/response/user.dto';
import { SubmissionDto } from 'src/modules/submission/domains/dtos/response/submission.dto';
import { CreateUserDto } from '../domains/dtos/request/create-user.dto';
import { UpdateUserDto } from '../domains/dtos/request/update-user.dto';
import { UserEntity } from '../domains/entities/user.entity';

@Injectable()
export class UserService {
  constructor(private readonly userRepository: UserRepository) {}

  async getUser(id: string): Promise<UserDto> {
    const user = await this.userRepository.getUser(id);
    if (!user) throw new NotFoundException('user not found');
    const result = new UserDto(user);
    return result;
  }

  async getUserEntity(id: string): Promise<UserEntity> {
    const userEntity = await this.userRepository.getUser(id);
    if (!userEntity) throw new NotFoundException('user not found');
    return userEntity;
  }

  async getUserByUserName(name: string) : Promise<UserEntity> {
    const userEntity = await this.userRepository.getUserByUserName(name);
    if (!userEntity) throw new NotFoundException('user not found');
    return userEntity;
  }


  async createUser(createUser: CreateUserDto) {
    const user = await  this.userRepository.createUser(createUser);
    const result = new UserDto(user);
    return result;

  }

  async updateUser(updateUser: UpdateUserDto) {
    const user = await this.userRepository.getUser(updateUser?.id);
    if (!user)
      throw new NotFoundException(`user not found with id: ${updateUser?.id}`);
    return this.userRepository.updateUser(user, updateUser);
  }
}
