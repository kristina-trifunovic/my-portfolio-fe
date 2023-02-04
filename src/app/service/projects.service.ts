import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  pathService = '/assets/data/projects.json';

  constructor(private http: HttpClient) { }

  loadProjects() {
    return this.http.get(this.pathService);
  }
}
