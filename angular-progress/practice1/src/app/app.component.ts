import { Component, OnInit } from '@angular/core';
import { EventModel } from './models/event.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'School Events';
  constructor() {}
  ngOnInit() {
    const savedEvents: EventModel[] = [
      {name:'Event1', date:'12.12.12', duration:'12.12.13', classes: [{  name: 'c' }] },
      {name:'Event1', date:'12.12.12', duration:'12.12.13', classes: [{  name: 'd' }] },
      {name:'Event1', date:'12.12.12', duration:'12.12.13', classes: [{  name: 'a' }] },
      {name:'Event1', date:'12.12.12', duration:'12.12.13', classes: [{  name: 'e' }] },
    ];
    localStorage.setItem('events', JSON.stringify(savedEvents));
  }
}

