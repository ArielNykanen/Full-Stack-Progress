import { Injectable } from '@angular/core';
import { of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  login(email, password) {
    if (email === 'a@a.con' && password === '1212') {
      const token = 'asdklfh;lasdjh;sdlfkjdlfh4'
      this.setToken(token);
     return of(token);
    } else {

      return throwError('Login failed.');
    }
  }
  setToken(token) {
    localStorage.setItem('token', token)
  }

  getToken() {
    const token = JSON.parse(localStorage.getItem('token'))
    if (token) {
      return true;
    }
    return false;
  }
}
