import { Component, OnInit } from '@angular/core';
import { Work } from 'src/app/model/work.model';
import { WorkService } from 'src/app/service/work.service';

@Component({
  selector: 'work',
  templateUrl: './work.component.html',
  styleUrls: ['./work.component.scss']
})
export class WorkComponent implements OnInit{
  workArray: Work[] = [];

  constructor(private workService: WorkService) {}

  ngOnInit(): void {
    this.loadWork();
  }

  loadWork() {
    this.workService.loadWork().subscribe((data: any) => {
      this.workArray = data.list;
    });
  }
}
