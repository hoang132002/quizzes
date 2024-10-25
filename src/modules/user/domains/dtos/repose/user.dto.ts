import { UserEntity } from "../../entities/user.entity";

export class UserDto {
  
  id: string;

  name: string;

  constructor(user : UserEntity){
    this.id = user?.id
    this.name = user?.name
}}

