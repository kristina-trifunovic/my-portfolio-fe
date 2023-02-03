import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FileService {
  download_endpoint: string = '/assets/files/Kristina-Trifunovic-CV.pdf';

  constructor(private http: HttpClient) { }

  downloadCV() {
    return this.http.get(this.download_endpoint, {responseType: 'blob'});
  }
}
