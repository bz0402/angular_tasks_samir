import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  constructor(private router: Router) { }
  IsError: boolean = false;
  Email  = new FormControl('');
  Password = new FormControl('');
  LoginForm = new FormGroup({
    Email: this.Email,
    Password: this.Password
  });

  ngOnInit() {
    const formData = JSON.parse(localStorage.getItem('formData') || '[]');
    const isLoggedIn = formData.some((user: any) => user.isLoggedIn === true);
    if (isLoggedIn) {
      this.router.navigate(['/News']);
    }
  }
  
  ValidateUser() {
    let formData = this.LoginForm.value;
    let existingData = JSON.parse(localStorage.getItem('formData') || '[]');
    let user = existingData.find((user: any) => user.Email === formData.Email && user.Password === formData.Password);
    if (user) {
     
      user.isLoggedIn = true;
      localStorage.setItem('formData', JSON.stringify(existingData));
      window.location.reload(); 
      
    } else {
    
      this.IsError = true;
      setTimeout(() => {
        this.IsError = false;
      }, 3000);
      
    }

  }



}
