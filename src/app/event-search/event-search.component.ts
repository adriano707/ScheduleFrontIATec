import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-event-search',
  templateUrl: './event-search.component.html',
  styleUrls: ['./event-search.component.css']
})
export class EventSearchComponent implements OnInit {
  events: Event[] = [];
  filter: string = '';

  displayedColumns: string[] = ['name', 'description', 'date', 'participants', 'actions'];

  constructor(private httpClient: HttpClient){}
  ngOnInit(): void {
    this.filterEvents();
  }

  filterEvents(){
    this.filter
    this.httpClient
      .get<Event[]>(`https://localhost:7251/events?filter=${this.filter}`)
      .subscribe(
        (res) => {
          this.events = res;
        },
        (error) => {
          alert("Error");
        }
      );
  }


}

class Event{
  public id: string;
  public name: string;
  public description: string;
  public date: Date;
  public locality: string;
  public participants: number;
  public eventType: number;
  public status: number;

  
  constructor(id: string, name: string, description: string, date: Date, locality: string, participants: number, eventType: number, status: number) {
    this.id = id;
    this.name = name;
    this.description = description;
    this.date = date
    this.locality = locality;
    this.participants = participants;
    this.eventType = eventType;
    this.status = status;
  }
}
