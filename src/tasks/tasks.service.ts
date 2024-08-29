import { Injectable, HttpCode, NotFoundException } from "@nestjs/common";
import { CreateTaskDto } from "./dto/create-task.dto";
import { UpdateTaskDto } from "./dto/update-task.dto";

export interface User {
    Name: string;
    Age: number;
}

@Injectable()
export class TasksService {
    private tasks = [];

    getTasks() {
        return this.tasks;
    }

    getTask(id: number) {
        const taskFound = this.tasks.find((task) => task.id === id)

        if (!taskFound) {
            // return "No se encontro la pagina web deseada";
            // -->MAL<-- throw new Error('Task not found')
            return new NotFoundException(`Task with id ${id} not found`)
        }
        return taskFound
    }

    createTask(task: CreateTaskDto) {
        console.log('task: ', task);
        this.tasks.push({
            ...task,
            id: this.tasks.length + 1,
        });
        return task
    }

    updateTask(task: UpdateTaskDto) {
        console.log('task: ', task);
        return "Actualizando tareas"
    }

    deleteTask(): User {
        return {
            Name: "Ooo",
            Age: 44
        }
    }

    updateTaskStatus(): User {
        return {
            Name: "Uuu",
            Age: 55
        }
    }
}