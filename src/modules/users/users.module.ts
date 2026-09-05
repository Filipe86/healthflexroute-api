import { Module } from '@nestjs/common';
import { UsersController } from '../../controllers/users/users.controller.js';
import { UsersService } from '../../services/users/users.service.js';
import { UserEntity } from '../../repositories/users/user.entity.js';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])],
  controllers: [UsersController],
  providers: [UsersService],
  exports: [UsersService], // Export UsersService to make it available for injection in other modules
})
export class UsersModule {}
