import { Module } from "@nestjs/common";
import { UserModule } from "../user/user.module";
import { AuthController } from "./controllers/auth.controller";
import { AuthService } from "./service/auth.service";
import { JwtModule } from "@nestjs/jwt";
import { jwtConstants } from "./constants";
import { PassportModule } from "@nestjs/passport";
import { JwtStrategy } from "./strategies/jwt.strategy";

@Module({
    imports: [UserModule ,PassportModule ,JwtModule.register({
        secret: jwtConstants.secret,
        signOptions: { expiresIn: '108000000000s' },
      }),],
    providers: [AuthService , JwtStrategy ],
    controllers: [AuthController],
  })
  export class AuthModule {}
  