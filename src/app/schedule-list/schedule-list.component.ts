import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-schedule-list',
  templateUrl: './schedule-list.component.html',
  styleUrls: ['./schedule-list.component.css']
})
export class ScheduleListComponent implements OnInit {

  nome: any;
  schedules: Schedule[] = [];

  constructor(private router: Router, private httpClient: HttpClient) { }
  ngOnInit(): void {
    this.loadSchedule();
  }

  loadSchedule() {
    this.httpClient
      .get<Schedule[]>(`https://localhost:7251/schedules`)
      .subscribe(
        (res) => {
          this.schedules = res;
        },
        (error) => {
          alert("Error");
        }
      );
  }

  CreateSchedule() {
    this.router.navigate(["/schedules-create"]);
  }
}

class Schedule {

  public id: string;
  public name: string;
  public description: string;

  constructor(id: string, name: string, description: string) {
    this.id = id;
    this.name = name;
    this.description = description;
  }
}
