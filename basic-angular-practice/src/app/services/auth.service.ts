import { Injectable } from '@angular/core';
import { of, throwError, Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userLogged = new Subject<boolean>();
  constructor() { }
  login(email, password) {
    if (email === 'a@a.com' && password === '1212') {
      const token = 'asdklfh;lasdjh;sdlfkjdlfh4'
      this.setToken(token);
      this.userLogged.next(true);
     return of(token);
    } else {
      return throwError('Login failed.');
    }
  }
  setToken(token) {
    localStorage.setItem('token', token)
  }

  getToken() {
    let token = localStorage.getItem('token');
    if (token) {
      return of(true);
    }
    return throwError('not logged!');
  }

  isLogged() { 
  this.getToken().subscribe(res => {
    if (!res) {
      this.userLogged.next(false);
    } else {
      this.userLogged.next(true);
    }
  })
  }

  logOut() {
    window.localStorage.removeItem('token');
    this.userLogged.next(false);
  }
}
