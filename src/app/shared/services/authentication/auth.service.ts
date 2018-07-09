import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  public isAuthenticated(): boolean {

    if (localStorage.getItem('currentUser')) {
      // logged in so return true
      return true;
    }
    // Check whether the token is expired and return
    // true or false
    return false;
  }
}
