import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private authService: AuthService,private router: Router) {}

  login() {
    // Perform authentication logic, set login status
     // Perform authentication logic, set login status
  this.authService.login();

  // Navigate to the home page after successful login
  this.router.navigate(['/home']);
  }
}
