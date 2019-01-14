import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { EventModel } from '../models/event.model';

@Component({
  selector: 'app-school-events',
  templateUrl: './school-events.component.html',
  styleUrls: ['./school-events.component.css']
})
export class SchoolEventsComponent implements OnInit {
  allEvents: EventModel[];
  constructor(private eventServices: EventService) { }

  ngOnInit() {
    this.allEvents = this.eventServices.getAll();
  }

}
