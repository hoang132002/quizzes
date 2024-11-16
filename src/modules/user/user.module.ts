import { TypeOrmModule } from "@nestjs/typeorm";
import { UserEntity } from "./domains/entities/user.entity";
import { UserController } from "./controllers/user.controller";
import { UserService } from "./services/user.service";
import { UserRepository } from "./repositories/user.repository";
import { Module } from "@nestjs/common";
import { UserDto } from "./domains/dtos/response/user.dto";



@Module({
    imports: [TypeOrmModule.forFeature([UserDto , UserEntity])],
    controllers: [UserController],
    providers: [UserService, UserRepository,  ],
    exports: [UserService],
  })
  export class UserModule {}