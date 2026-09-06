import { Body, Controller, Delete, Get, Param, Post, Put, UseGuards } from '@nestjs/common';
import { UsersService } from '../../services/users/users.service.js';
import { UserDto } from './user.dto.js';

@Controller('users')
export class UsersController {

    constructor(
        private readonly usersService: UsersService, // Inject the UsersService
    ) {}

    @Get()
    getAllUsers() {
        // Logic to retrieve all users
        return this.usersService.getAll(); // Call the service method to get all users
    }

    @Get(':id')
    getUserById(@Param('id') id: number) {
        // Logic to retrieve a user by ID
        return this.usersService.getUserById(id); // Call the service method to get a user by ID
    }

    @Post()
    createUser(@Body() createUserDto: UserDto) {
        // Logic to create a new user
        return this.usersService.createUser(createUserDto as any); // Call the service method to create a new user
    }

    @Delete(':id')
    deleteUser(@Param('id') id: number) {
        // Logic to delete a user by ID
        return this.usersService.deleteUser(id); // Call the service method to delete a user by ID
    }

    @Put(':id')
    updateUser(@Param('id') id: number) {
        // Logic to update an existing user
        return this.usersService.updateUser(id, {} as any); // Call the service method to update a user (replace {} with actual user data)
    }
}
