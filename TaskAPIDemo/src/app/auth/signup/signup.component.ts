import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});
  errorMessage = '';
  loading = false;

  constructor(private fb: FormBuilder, private authService: AuthService, public router: Router) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      Name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', [Validators.required]]
    }, {
      validators: this.passwordMatchValidator
    });
  }

  passwordMatchValidator(g: FormGroup) {
    return g.get('password')?.value === g.get('confirmPassword')?.value
      ? null : {'mismatch': true};
  }

  onSubmit() {
    if (this.signupForm.valid) {
      this.loading = true;
      this.errorMessage = '';

      const userData = {
        name: this.signupForm.get('Name')?.value,
        email: this.signupForm.get('email')?.value,
        password: this.signupForm.get('password')?.value,
        role: "user"
      };

      this.authService.signup(userData).subscribe({
        next: (response) => {
          if (response.success) {
            // Store the token if it's in the response
            if (response.data?.accessToken) {
              localStorage.setItem('accessToken', response.data.accessToken);
            }
            this.router.navigate(['/auth']);
          } else {
            this.errorMessage = response.message || 'Signup failed. Please try again.';
          }
          this.loading = false;
        },
        error: (error) => {
          this.errorMessage = error.error?.message || 'An error occurred during signup. Please try again.';
          this.loading = false;
          console.error('Signup failed', error);
        }
      });
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
    }
  }
}
