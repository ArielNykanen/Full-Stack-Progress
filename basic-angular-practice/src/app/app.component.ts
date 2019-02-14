import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'basic-angular-practice';
  isLogged = false;
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.authService.isLogged();
    this.authService.userLogged.subscribe((boolean) => {
      this.isLogged =  boolean;
    })
  }

  logOut() {
    this.authService.logOut();
  }
}
