import { Module } from '@nestjs/common';
import { UsersController } from '../../controllers/users/users.controller.js';
import { UsersService } from '../../services/users/users.service.js';

@Module({
    imports: [],
    controllers: [UsersController],
    providers: [UsersService],
})
export class PatientsModule {}
