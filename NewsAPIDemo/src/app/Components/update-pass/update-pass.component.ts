import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-update-pass',
  templateUrl: './update-pass.component.html',
  styleUrls: ['./update-pass.component.scss']
})
export class UpdatePassComponent {
  passwordData = {
    currentPassword: '',
    newPassword: '',
    confirmPassword: ''
  };

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }
    
  onSubmit(form: NgForm) {
    if (form.valid) {
      const formData = form.value;

      if (formData.newPassword !== formData.confirmPassword) {
        alert('New password and confirm password do not match!');
        return;
      }

      const success = this.localStorageService.updatePassword(
        formData.currentPassword,
        formData.newPassword
      );

      if (success) {
        alert('Password updated successfully!');
        this.router.navigate(['/']);
      } else {
        alert('Current password is incorrect!');
      }
    }
  }
}
