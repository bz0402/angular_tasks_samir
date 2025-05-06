import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent  {

  constructor(private router: Router) { }
    
  IsLogin: boolean = false;
  
  RegisterForm = new FormGroup(
    {
      Name: new FormControl('', Validators.required),
      Mobile: new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]{10}$')
      ]),
      Email: new FormControl('', [
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$')
      ]),
      Password: new FormControl('', [
        Validators.required,
        Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{6,}$')
      ]),
      ConfirmPassword: new FormControl('', Validators.required)
    },
    { validators: RegisterComponent.matchPasswords },
  );

  onSubmit() {
    if (this.RegisterForm.valid) {
      const formData = this.RegisterForm.value;
      const existingData = JSON.parse(localStorage.getItem('formData') || '[]');
      existingData.push({ ...formData, isLoggedIn: false });  
      localStorage.setItem('formData', JSON.stringify(existingData));  
      this.router.navigate(['/Login']);  
    }
  }
  static matchPasswords(group: AbstractControl): ValidationErrors | null {
    const pass = group.get('Password')?.value;
    const confirm = group.get('ConfirmPassword')?.value;
    return pass === confirm ? null : { passwordMismatch: true };
  }

  get EmailError() {
    return this.RegisterForm.get('Email');
  }

  get passwordMismatch() {
    return this.RegisterForm.errors?.['passwordMismatch'] &&
      this.RegisterForm.get('ConfirmPassword')?.touched;
  }
}
