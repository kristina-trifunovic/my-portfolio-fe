import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EducationService {
  pathService = '/assets/data/education.json';

  constructor(private httpClient: HttpClient) { }

  loadEducation() {
    return this.httpClient.get(this.pathService);
  }
}
