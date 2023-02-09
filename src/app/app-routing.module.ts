import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthCheckService } from './authorization/auth-check.service';
import { EventCreateComponent } from './event-create/event-create.component';
import { EventSearchComponent } from './event-search/event-search.component';
import { LoginComponent } from './login/login/login.component';
import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { ScheduleCreateComponent } from './schedule-create/schedule-create.component';
import { ScheduleDetailComponent } from './schedule-detail/schedule-detail.component';
import { ScheduleListComponent } from './schedule-list/schedule-list.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,canActivate: [AuthCheckService] ,children: [
      { path: 'schedules', component: ScheduleListComponent, canActivate: [AuthCheckService]},
      { path: 'schedule-detail/:id', component: ScheduleDetailComponent, canActivate: [AuthCheckService]},
      { path: 'schedules-create', component: ScheduleCreateComponent, canActivate: [AuthCheckService] },
      { path: 'events-create', component: EventCreateComponent, canActivate: [AuthCheckService] },
      { path: 'events', component: EventSearchComponent, canActivate: [AuthCheckService] }
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: '404', component: NotfoundComponent },
  { path: '**', redirectTo: '/404' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
