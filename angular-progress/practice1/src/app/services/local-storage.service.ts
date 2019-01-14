import { Injectable } from '@angular/core';
import { EventModel } from '../models/event.model';
import { ClassModel } from '../models/class.model';

@Injectable()
export class LocalStorageService {

  get() {
    const allEvents = JSON.parse(localStorage.getItem('events'));
    if (!allEvents) {
      const savedEvents: EventModel[] = [
        
      ];
      localStorage.setItem('events', JSON.stringify(savedEvents));
      return savedEvents;  
    }

    return allEvents;
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

}
