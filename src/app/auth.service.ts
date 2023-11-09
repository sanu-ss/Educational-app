import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = false;

  login() {
    // Implement your authentication logic here
    // Set this.loggedIn to true if authentication is successful
    this.loggedIn = true;
  }

  logout() {
    // Implement logout logic if needed
    this.loggedIn = false;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }
}
