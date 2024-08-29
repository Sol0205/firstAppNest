import { Controller, Patch, Get, Post, Put, Delete, Body, Query, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('/tasks')
export class TaskController {
    constructor(private tasksService: TasksService) { }

    @Get()
    getAllTasks(@Query() query: any) {
        console.log('Query: ', query);
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    getTask(@Param('id') id: string) {
        console.log('id: ', id);
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    }

    @Put()
    updateTask(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTask(task);
    }

    @Delete()
    deleteTask() {
        return this.tasksService.deleteTask();
    }

    @Patch()
    updateTaskStatus() {
        return this.tasksService.updateTaskStatus();
    }
}