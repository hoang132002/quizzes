import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UserService } from 'src/modules/user/services/user.service';
import { LoginDto } from '../domains/dtos/request/login.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async signIn(loginDto: LoginDto): Promise<any> {
    const user = await this.userService.getUserByUserName(loginDto.username);
    if (user?.password !== loginDto.password) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    // TODO: Generate a JWT and return it here
    // instead of the user object
    return result;
  }

  async login(loginDto: LoginDto) {

    const userEntity = await this.userService.getUserByUserName(loginDto.username);

    if (userEntity?.password !== loginDto.password) {
        throw new UnauthorizedException();
      }
    const payload = { username: userEntity.username, sub: userEntity.id};
    return {
      access_token: this.jwtService.sign(payload),
    };
}}
