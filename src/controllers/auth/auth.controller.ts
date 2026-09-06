
import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Req,
} from '@nestjs/common';
import { AuthService } from './../../services/auth/auth.service.js';
import { Public } from '../../services/auth/auth.public.js';
import { UserDto } from '../users/user.dto.js';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Public()
  @Post('login')
  signIn(@Body() signInDto: Record<string, any>) {
    return this.authService.signIn(signInDto.username, signInDto.password);
  }

  @Get('profile')
  getProfile(@Req() request: Request & { user: unknown }) {
    return "This is a protected route. You are authenticated as: " + JSON.stringify(request.user);
  }

  @Public()
  @Post('register')
  register(@Body() registerDto: UserDto) {
    return this.authService.register(registerDto);
  }
}
