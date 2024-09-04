import { Controller, Get, HttpCode, Param, ParseBoolPipe, ParseIntPipe, Query, Req, Res, UseGuards } from '@nestjs/common';
import { Request, Response } from 'express';
import { ValidateuserPipe } from './pipes/validateuser/validateuser.pipe';
import { AuthGuard } from './guards/auth/auth.guard';
import { ApiTags } from '@nestjs/swagger';

@Controller()
@ApiTags('Hello')
export class HelloController {

    @Get('/hello')
    index(@Req() request: Request, @Res() response: Response) {
        console.log(request.url);
        response.status(200).json({
            message: 'Hello World',
        })
    }

    @Get('new')
    @HttpCode(201)
    somethingNew() {
        return "Something new"
    }

    @Get('notfound')
    @HttpCode(404)
    notFoundPage() {
        return '404 not found'
    }

    @Get('error')
    @HttpCode(500)
    errorPage() {
        return 'Error route!!'
    }

    @Get('ticket/:num')
    getNumber(@Param('num', ParseIntPipe) num: number) {
        console.log(typeof num)
        return num + 14;
    }

    @Get('active/:status')
    isUserActive(@Param('status', ParseBoolPipe) status: boolean) {
        console.log(typeof status)
        return status;
    }

    // para poder acceder desde google lo busco asi:
    // http://localhost:3000/greet?name=Sol&age=21

    @Get('greet')
    @UseGuards(AuthGuard)
    greet(@Query(ValidateuserPipe) query: { name: string, age: number }) {
        console.log(typeof query.name);
        console.log(typeof query.age);
        return `Hello ${query.name}, you are ${query.age} years old`
    }
}
