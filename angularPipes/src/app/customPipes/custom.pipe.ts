import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';

@Pipe({
  name: 'customPassGenerator'
})
export class CustomPipe implements PipeTransform {

  password!: Observable<string>;

  generatePassword(passwordLength:number): string {
    const Characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < passwordLength; i++) {
      const randomIndex = Math.floor(Math.random() * Characters.length);
      password += Characters[randomIndex];
    }
    return password;
  }
  transform(value: number, ...args: number[]): string {
    
    return this.generatePassword(value);
    
  }

}
