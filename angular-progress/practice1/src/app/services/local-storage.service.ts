import { Injectable } from '@angular/core';
import { EventModel } from '../models/event.model';
import { ClassModel } from '../models/class.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class LocalStorageService {
public eventsWasUpdated = new Subject();
  get(cb) {
    const allEvents = JSON.parse(localStorage.getItem('events'));
    if (!allEvents) {
      const savedEvents: EventModel[] = [
        
      ];
      localStorage.setItem('events', JSON.stringify(savedEvents));
      return cb(savedEvents); 
    }

    return cb(allEvents);
  }

  getAllClasses() {
    const allClasses = JSON.parse(localStorage.getItem('classes'));
    if (!allClasses) {
      const savedClasses: ClassModel[] = [
        {name:'First Grade'},
        {name:'second Grade'},
        {name:'third Grade'},
      ];
      localStorage.setItem('classes', JSON.stringify(savedClasses));
      return savedClasses;  
    }
    return allClasses;
  }

  deleteById(id) {
    this.get(events => {
      const updatedEvents = events.splice(id, 1);
      this.eventsWasUpdated.next(updatedEvents);
    });

  }

}
