import { Controller, Patch, Get, Post, Put, Delete } from '@nestjs/common';
import { ProjectsService } from './projects.service';

@Controller({})
export class ProjectsController {
    constructor(private projectsService: ProjectsService) { }

    @Get('/projects')
    getAllProjects() {
        return this.projectsService.getProjects();
    }
    @Post('/projects')
    createProject() {
        return "Agregando proyectos";
    }
    @Put('/projects')
    updateProject() {
        return "Actualizando proyectos";
    }
    @Delete('/projects')
    deleteProject() {
        return "Eliminando proyectos";
    }
    @Patch('/projects')
    updateProjectStatus() {
        return "Actualizando el estado de una tarea";
    }
}
