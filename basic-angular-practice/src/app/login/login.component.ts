import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authServices: AuthService) { }

  ngOnInit() {
  }
  onLogin(email, password) {
    this.authServices.login(email.value, password.value)
    .subscribe(results => {
      console.log(results);
    }, err => {
      console.log(err);
      email.value = password.value = '';
    })
  }
}
