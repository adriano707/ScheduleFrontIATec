import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';

import { FormsModule } from '@angular/forms';
import { ScheduleCreateComponent } from './schedule-create/schedule-create.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { LoginComponent } from './login/login/login.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { MainComponent } from './main/main.component';
import { MatListModule } from '@angular/material/list'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { EventSearchComponent } from './event-search/event-search.component';
import { EventCreateComponent } from './event-create/event-create.component';

@NgModule({
  declarations: [
    AppComponent,
    ScheduleListComponent,
    ScheduleCreateComponent,
    LoginComponent,
    NotfoundComponent,
    MainComponent,
    ScheduleDetailComponent,
    EventSearchComponent,
    EventCreateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,    
    CommonModule,
    BrowserModule,
    AppRoutingModule,   
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatInputModule,
    MatFormFieldModule,
    MatCardModule,
    NgbModule,
    MatToolbarModule,
    MatIconModule,
    MatCheckboxModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    NgxMaskDirective,  
    NgxMaskPipe,
    MatListModule,
    MatDividerModule
  ],
  providers: [ 
    provideNgxMask(),  
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true } 
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
