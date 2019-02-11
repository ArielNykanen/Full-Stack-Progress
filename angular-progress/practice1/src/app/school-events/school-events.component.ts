import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { EventModel } from '../models/event.model';
import { LocalStorageService } from '../services/local-storage.service';

@Component({
  selector: 'app-school-events',
  templateUrl: './school-events.component.html',
  styleUrls: ['./school-events.component.css']
})
export class SchoolEventsComponent implements OnInit {
  allEvents: EventModel[];
  constructor(private eventServices: EventService, private ls :LocalStorageService) { }

  ngOnInit() {
    this.allEvents = this.eventServices.getAll();
    this.ls.eventsWasUpdated.subscribe((updatedEvents) => {
      <EventModel[]>this.allEvents = updatedEvents;
    });
  }
  deleteEvent(eventId: number) {
    this.eventServices.deleteById(eventId);
  }
}
