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
  }
}

