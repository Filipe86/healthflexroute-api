import { Module } from '@nestjs/common';
import { UsersController } from '../../controllers/users/users.controller.js';
import { UsersService } from '../../services/users/users.service.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from '../../repositories/users/users.entity.js'; // Import the User entity

@Module({
  imports: [TypeOrmModule.forFeature([UserEntity])], // Import the User entity for TypeORM
  controllers: [UsersController],
  providers: [UsersService],
})
export class PatientsModule {}
