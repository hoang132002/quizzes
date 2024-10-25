import { Controller, Get, Param } from "@nestjs/common";
import { UserService } from "../services/user.service";


@Controller('/v1/users/')
export class UserController {
  constructor(
    private readonly userService: UserService,
  ) {}
@Get('/:id')
  getSubmission(@Param('id') id : string){
    return this.userService.getUser(id);
   }
}