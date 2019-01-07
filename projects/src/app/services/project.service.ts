import { Injectable } from '@angular/core';
import { ProjectModel } from '../models/project.model';

@Injectable()
export class ProjectService {

  get(): ProjectModel[] {
    return [
      new ProjectService('jkdf')
    ]
  }
}
