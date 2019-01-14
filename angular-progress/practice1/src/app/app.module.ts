import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SchoolEventsComponent } from './school-events/school-events.component';
import { AddEventComponent } from './add-event/add-event.component';
import { EventService } from './services/event.service';
import { LocalStorageService } from './services/local-storage.service';
import { ClassService } from './services/class.service';


@NgModule({
  declarations: [
    AppComponent,
    SchoolEventsComponent,
    AddEventComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    EventService,
  LocalStorageService,
  ClassService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
