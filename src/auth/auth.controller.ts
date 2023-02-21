import {Controller, Request, Post, UseGuards, Get, Req} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import {AccessTokenGuard} from "../common/guards/accesToken.guard";

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return this.authService.login(req.user);
    }

    @UseGuards(AuthGuard('local'))
    @Get('profile')
    getProfile(@Request() req) {
        return req.user;
    }

}
