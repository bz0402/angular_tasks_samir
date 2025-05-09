import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginData = { username: '', password: '' };  

  login(form: NgForm) {
    if (form.valid) {
      console.log('Form submitted', this.loginData);
    }
  }
}
