import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent {
  forgotData = {
    email: 'dsjcsdnj'
  };

  constructor() {}


  resetPassword(aaa: AuthService): void {
    if (aaa) {
      alert(`A reset link has been sent to ${this.forgotData.email}`);
    } else {
      console.warn('Form is invalid');
    }
  }
}
