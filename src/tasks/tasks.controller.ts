import { Controller, Patch, Get, Post, Put, Delete, Body, Query, Param } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';

@Controller('/tasks')
@ApiTags('Tasks')
export class TaskController {
    constructor(private tasksService: TasksService) { }

    @Get()
    @ApiOperation({ summary: 'Get all tasks' })
    getAllTasks(@Query() query: any) {
        console.log('Query: ', query);
        return this.tasksService.getTasks();
    }

    @Get('/:id')
    @ApiOperation({ summary: 'Get tasks by id' })
    @ApiResponse({ status: 200, description: 'Return all tasks.' })
    @ApiResponse({ status: 403, description: 'Forbidden.' })
    @ApiResponse({ status: 200, description: 'Return all tasks.' })
    getTask(@Param('id') id: string) {
        console.log('id: ', id);
        return this.tasksService.getTask(parseInt(id));
    }

    @Post()
    @ApiOperation({ summary: 'Create a tasks' })
    createTask(@Body() task: CreateTaskDto) {
        return this.tasksService.createTask(task);
    }

    @Put()
    @ApiOperation({ summary: 'Update a tasks' })
    updateTask(@Body() task: UpdateTaskDto) {
        return this.tasksService.updateTask(task);
    }

    @Delete()
    @ApiOperation({ summary: 'Delete a tasks' })
    deleteTask() {
        return this.tasksService.deleteTask();
    }

    @Patch()
    @ApiOperation({ summary: 'Update task status' })
    updateTaskStatus() {
        return this.tasksService.updateTaskStatus();
    }
}