import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = { email: '', password: '' };  

  constructor(private authService: AuthService, private router: Router) {}

  login(form: NgForm) {
    if (form.valid) {
      this.authService.login(this.loginData).subscribe({
        next: (response) => {
          console.log('Login successful', response);
          this.router.navigate(['']);
        },
        error: (error) => {
          console.error('Login failed', error);
        }
      });
    }
  }
}
