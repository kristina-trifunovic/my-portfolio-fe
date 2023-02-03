import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  pathService = '/assets/data/education.json';

  constructor(private http: HttpClient) { }

  loadEducation() {
    return this.http.get(this.pathService);
  }
}
