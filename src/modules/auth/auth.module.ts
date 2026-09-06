import { Module } from '@nestjs/common';
import { AuthController } from '../../controllers/auth/auth.controller.js';
import { AuthService } from '../../services/auth/auth.service.js';
import { UsersModule } from '../users/users.module.js';
import { JwtModule } from '@nestjs/jwt';
import { AuthGuard } from '../../services/auth/auth.guard.js';

@Module({
  imports: [
    UsersModule,
    JwtModule.register({
      secret: process.env.JWT_API_KEY || 'default_secret_key', // Use a default secret key if not provided in environment variables
      signOptions: { expiresIn: '1h' }, // Token expiration time
    }),
  ],
  exports: [AuthService],
  controllers: [AuthController],
  providers: [AuthService, { provide: 'APP_GUARD', useClass: AuthGuard }],
})
export class AuthModule {}
