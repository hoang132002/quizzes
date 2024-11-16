import { Body, Controller, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { UserService } from '../services/user.service';
import { UserDto } from '../domains/dtos/response/user.dto';
import { CreateUserDto } from '../domains/dtos/request/create-user.dto';
import { UpdateUserDto } from '../domains/dtos/request/update-user.dto';
import { JwtAuthGuard } from 'src/modules/auth/guards/jwt-auth.guard';

@Controller('/v1/users/')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(JwtAuthGuard)
  @Get('/:id')
  getSubmission(@Param('id') id: string) {
    return this.userService.getUser(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  createUser(@Body() createUser: CreateUserDto) {
    return this.userService.createUser(createUser);
  }

  @UseGuards(JwtAuthGuard)
  @Patch()
  updateUser(@Body() updateUser: UpdateUserDto) {
    return this.userService.updateUser(updateUser);
  }
}
