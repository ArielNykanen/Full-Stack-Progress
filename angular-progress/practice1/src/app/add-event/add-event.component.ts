import { Component, OnInit } from '@angular/core';
import { ClassService } from '../services/class.service';
import { ClassModel } from '../models/class.model';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  allClasses: ClassModel[];
  constructor(private classesServices: ClassService) { }

  ngOnInit() {
    this.allClasses = this.classesServices.get();
  }

}
