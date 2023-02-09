import { Component } from '@angular/core';

import { OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { NotificationService } from '../services/notification.service';
import { SpinnerService } from '../services/spinner.service';


@Component({
  selector: 'app-schedule-create',
  templateUrl: './schedule-create.component.html',
  styleUrls: ['./schedule-create.component.css']
})



export class ScheduleCreateComponent {

  data = this.fb.group({
    name: null,
    description: null,
  });

  constructor(private router: Router,
    private httpClient: HttpClient,
    private fb: FormBuilder,
    private notificationService: NotificationService,
    private spinnerService: SpinnerService) {
  }

  ngOnInit(): void {

  }

  save(): void {

    this.httpClient
      .post<any>(`https://localhost:7251/schedules`, this.data.value)
      .subscribe(
        (res) => {
          alert("Salvo com sucesso");
          this.router.navigate(['/schedules']);
        },
        (error) => {
          alert("Error");
        }
      );
  }

  cancel(): void {
    this.router.navigate(["/schedules"]);
  }
}

