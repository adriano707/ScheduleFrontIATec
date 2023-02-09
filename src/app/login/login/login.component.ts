import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {


  data = this.fb.group({
    email: null,
    password: null
  });

  constructor(private router: Router,
    private httpClient: HttpClient,
    private fb: FormBuilder) {
  }

  login() {
    this.httpClient
      .post<any>(`https://localhost:7251/users/login`, this.data.value)
      .subscribe((user) => {
        localStorage.setItem('user', JSON.stringify(user));       
        this.router.navigate(['/schedules']);
      });
  }
}
