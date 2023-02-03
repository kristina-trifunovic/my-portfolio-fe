import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WorkService {
  pathService = '/assets/data/work.json';

  constructor(private http: HttpClient) { }

  loadWork() {
    return this.http.get(this.pathService);
  }
}
