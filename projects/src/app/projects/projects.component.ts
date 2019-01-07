import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../services/project.service';
import { ProjectModel } from '../models/project.model';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projectsArr: ProjectModel[];
  constructor(private ps: ProjectService) { }

  ngOnInit() {
    this.projectsArr = this.ps.get();
  }

}
