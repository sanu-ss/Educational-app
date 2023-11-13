import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {FormBuilder,FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  
})
export class LoginComponent {
  loginForm :FormGroup;
  constructor(private authService: AuthService,
    private router: Router,
    private _formBuilder: FormBuilder) {
      this.loginForm = this._formBuilder.group({
        email: ['', Validators.required],
      });
  }

  login() {
     // Perform authentication logic, set login status
  this.authService.login();

  // Navigate to the home page after successful login
  this.router.navigate(['/home']);
  }
}
