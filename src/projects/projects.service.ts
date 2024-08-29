import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectsService {
    getProjects() {
        return ['Proyecto 1', 'Proyecto 2', 'Proyecto 3', 'Proyecto 4']
    }
}
