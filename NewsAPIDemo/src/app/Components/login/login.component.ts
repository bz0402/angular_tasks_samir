import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  IsError: boolean = false;
  Email = new FormControl('');
  Password = new FormControl('');
  LoginForm = new FormGroup({
    Email: this.Email,
    Password: this.Password
  });

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) { }

  ngOnInit() {
    this.localStorageService.currentUser$.subscribe(user => {
      if (user) {
        this.router.navigate(['/News']);
      }
    });
  }
  
  ValidateUser() {
    const formData = this.LoginForm.value;
    if (formData.Email && formData.Password) {
      const success = this.localStorageService.login(formData.Email, formData.Password);
      
      if (success) {
        window.location.reload();
      } else {
        this.IsError = true;
        setTimeout(() => {
          this.IsError = false;
        }, 3000);
      }
    }
  }
}
