import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { AuthService } from '../service/auth.service';
import { LoginDto } from '../domains/dtos/request/login.dto';

@Controller('/v1/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post()
  signIn(@Body() signInDto: LoginDto) {
    return this.authService.signIn(signInDto);

  }

  @Post('/login')
  login(@Body() signInDto: LoginDto) {
    return this.authService.login(signInDto);

  }

}
