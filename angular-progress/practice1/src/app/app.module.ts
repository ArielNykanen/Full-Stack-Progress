import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { SchoolEventsComponent } from './school-events/school-events.component';


@NgModule({
  declarations: [
    AppComponent,
    SchoolEventsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
