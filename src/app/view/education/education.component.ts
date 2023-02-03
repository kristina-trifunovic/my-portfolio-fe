import { Component, OnInit } from '@angular/core';
import { Education } from 'src/app/model/education.model';
import { EducationService } from 'src/app/service/education.service';

@Component({
  selector: 'education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit{
  educations: Education[] = [];

  constructor(private educationService: EducationService) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this.educationService.loadEducation().subscribe((data: any) => this.educations = data.list);
  }
}
