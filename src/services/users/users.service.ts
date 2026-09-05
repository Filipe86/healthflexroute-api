import { Injectable } from '@nestjs/common';
import { User } from './user.js';

@Injectable()
export class UsersService {

    private readonly users: User[] = [
        {
            id: '1',
            name: 'John Doe',
            email: 'test@example.com',
            username: 'johndoe',
            password: 'hashed_password',
            role: 'user'
        }
    ];

    async getUserByUsername(username: string): Promise<User | null> {
        return this.users.find(user => user.username === username) || null;
    }
}
