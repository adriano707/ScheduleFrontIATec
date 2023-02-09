import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-event-create',
  templateUrl: './event-create.component.html',
  styleUrls: ['./event-create.component.css']
})
export class EventCreateComponent {

  data = this.fb.group({
    name: null,
    description: null,
    date: null,
    licality: null,
    participants: null,
    eventType: null,
    status: null,
    isActive: null
  });

  constructor(private router: Router,
    private httpClient: HttpClient,
    private fb: FormBuilder){    
}


  cancel(){}
  save(){}
}
