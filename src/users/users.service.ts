import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersService {


    constructor(private prisma: PrismaService) { }


    getUsers() {
        return this.prisma.user.findMany();
    }

    createUser(user: CreateUserDto) {
        return  this.prisma.user.create({
                data: user
            })
    }
}


//ESTO ESTABA EN LA LINEA 7

// private users: any[] = [
//     {
//         id: "1",
//         name: "Sol",
//         phone: "1125723013",
//     },
//     {
//         id: "2",
//         name: "Alex",
//         phone: "1125953726",
//     },
//     {
//         id: "3",
//         name: "Angel",
//         phone: "0123456789",
//     },
// ];