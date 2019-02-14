import { Component, OnInit } from '@angular/core';
import { UserInterface } from '../models/user.mode';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  userModel: UserInterface;
  name;
  constructor() { 
    this.userModel = <UserInterface>{name: '', age: '', gender: '', number: '' }
  }

  ngOnInit() {
  }
  registerUser() {
    console.log(this.userModel);
  }
}
