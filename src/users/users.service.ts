import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';

@Injectable()
export class UsersService {

    private users: any[] = [
        {
            id: "1",
            name: "Sol",
            phone: "1125723013",
        },
        {
            id: "2",
            name: "Alex",
            phone: "1125953726",
        },
        {
            id: "3",
            name: "Angel",
            phone: "0123456789",
        },
    ];

    getUsers() {
        // return ["H", "E", "L", "L", "O"]
        return this.users;
    }

    createUser(user: CreateUserDto) {
        this.users.push(user)

        return {
            ...user,
            id: this.users.length + 1,
        }
    }
}
