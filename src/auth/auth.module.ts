import { Module } from "@nestjs/common"

import { PassportModule } from "@nestjs/passport"
import { JwtModule } from '@nestjs/jwt';
import { MongooseModule } from "@nestjs/mongoose"
import {UserModule} from "../users/users.module";
import {LocalStrategy} from "./local.auth";
import {UsersService} from "../users/users.service";
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import {UserSchema} from "../users/users.model";


@Module({
    imports: [UserModule, PassportModule, JwtModule.register({
        secret: 'secretKey',
        signOptions: { expiresIn: '60s' },
    }), MongooseModule.forFeature([{ name: "user", schema: UserSchema }])],
    providers: [AuthService, UsersService, LocalStrategy],
    controllers: [AuthController],
})
export class AuthModule { }
