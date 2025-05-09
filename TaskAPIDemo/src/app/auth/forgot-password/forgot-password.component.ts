import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotData = {
    email: ''
  };

  constructor(private authService: AuthService, private router: Router) {}

  resetPassword(form: NgForm): void {
    if (form.valid) {
      this.authService.forgotPassword(this.forgotData.email).subscribe({
        next: (response) => {
          console.log('Reset link sent', response);
          this.router.navigate(['/auth']);
        },
        error: (error) => {
          console.error('Failed to send reset link', error);
          alert(error.error.message || 'Failed to send reset link. Please try again.');
        }
      });
    }
  }
}
