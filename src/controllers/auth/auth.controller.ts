
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards
} from '@nestjs/common';
import { AuthGuard } from './../../services/auth/auth.guard.js';
import { AuthService } from './../../services/auth/auth.service.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Req() request: Request & { user: unknown }) {
    return "This is a protected route. You are authenticated as: " + JSON.stringify(request.user);
  }
}
