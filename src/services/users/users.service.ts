import { Injectable } from '@nestjs/common';
import { User } from './user.js';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from '../../repositories/users/user.entity.js';

@Injectable()
export class UsersService {

    constructor(
        @InjectRepository(UserEntity) 
        private usersRepository: Repository<UserEntity>,
    ) {}

    async getAll(): Promise<User[]> {
        const users = await this.usersRepository.find();
        return users.map(user => ({
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            password: user.password,
            role: user.role,
        }));
    }

    async getUserById(id: number): Promise<User | null> {
        const user = await this.usersRepository.findOne({ where: { id } });
        if (!user) {
            return null;
        }
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            password: user.password,
            role: user.role,
        };
    }

    async createUser(user: User): Promise<User> {
        const newUser = this.usersRepository.create(user);
        await this.usersRepository.save(newUser);
        return {
            id: newUser.id,
            name: newUser.name,
            email: newUser.email,
            username: newUser.username,
            password: newUser.password,
            role: newUser.role,
        };
    }

    async updateUser(id: number, user: Partial<User>): Promise<User | null> {
        const existingUser = await this.usersRepository.findOne({ where: { id } });
        if (!existingUser) {
            return null;
        }
        const updatedUser = Object.assign(existingUser, user);
        await this.usersRepository.save(updatedUser);
        return {
            id: updatedUser.id,
            name: updatedUser.name,
            email: updatedUser.email,
            username: updatedUser.username,
            password: updatedUser.password,
            role: updatedUser.role,
        };
    }
    
    async deleteUser(id: number): Promise<boolean> {
        const result = await this.usersRepository.delete(id);
        return (result.affected ?? 0) > 0;
    }

    async getUserByUsername(username: string): Promise<User | null> {
        const user = await this.usersRepository.findOne({ where: { username } });
        if (!user) {
            return null;
        }
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            username: user.username,
            password: user.password,
            role: user.role,
        };
    }
}
