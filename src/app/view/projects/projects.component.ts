import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/model/project.model';
import { ProjectsService } from 'src/app/service/projects.service';

@Component({
  selector: 'projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects: Project[] = [];

  constructor(private projectsService: ProjectsService) {}

  ngOnInit(): void {
    this.loadProjects();
  }

  loadProjects() {
    this.projectsService.loadProjects().subscribe((data: any) => this.projects = data.list);
  }

  goToRepository(link: string) {
    window.open(link);
  }
}
