import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-schedule-detail',
  templateUrl: './schedule-detail.component.html',
  styleUrls: ['./schedule-detail.component.css']
})
export class ScheduleDetailComponent  implements OnInit{

  scheduleId: any;
  scheduleName: string = "";

  constructor(private router: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.router.queryParams.subscribe(params => {
      this.scheduleName = params['scheduleName'];
    });


    this.router.params.subscribe(params => {
      this.scheduleId = params['id'];
      
    });
  }

  
}
