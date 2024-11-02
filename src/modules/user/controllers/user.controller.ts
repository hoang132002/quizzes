import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserDto } from '../domains/dtos/repose/user.dto';
import { CreateUserDto } from '../domains/dtos/request/create-user.dto';
import { UpdateUserDto } from '../domains/dtos/request/update-user.dto';

@Controller('/v1/users/')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Get('/:id')
  getSubmission(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @Post()
  createUser(@Body() createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }

  @Patch()
  updateUser(@Body() updateUser: UpdateUserDto) {
    return this.userService.updateUser(updateUser);
  }
}
