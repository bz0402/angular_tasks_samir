import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, of, Subscription, interval, timer } from 'rxjs';

@Component({
  selector: 'app-pass-generator',
  templateUrl: './pass-generator.component.html'
})
export class PassGeneratorComponent implements OnInit, OnDestroy {
  length: number = 12;
  password$!: Observable<string>;
  autoPassword$!: Observable<string>;
  countdown: number = 10;

  private timerSubscription!: Subscription;
  private countdownSubscription!: Subscription;

  ngOnInit(): void {
    this.generatePassword();
    this.generateAutoPassword();
    this.startCountdownTimer();
  }

  ngOnDestroy(): void {
    if (this.timerSubscription) this.timerSubscription.unsubscribe();
    if (this.countdownSubscription) this.countdownSubscription.unsubscribe();
  }

  generatePassword(): void {
    this.password$ = of(this.generateRandomPassword(this.length));
  }

  generateAutoPassword(): void {
    this.autoPassword$ = of(this.generateAPassword());
  }

  generateRandomPassword(length: number): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }

  
  generateAPassword(): string {
    const characters = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let password = '';
    for (let i = 0; i < 12; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      password += characters[randomIndex];
    }
    return password;
  }


  onLengthChange(event: Event): void {
    const inputElement = event.target as HTMLInputElement;
    this.length = parseInt(inputElement.value, 10);
    this.generatePassword();
  }

  copyToClipboard(password: string): void {
    navigator.clipboard.writeText(password).then(() => {
      alert('Password copied to clipboard!');
    });
  }

  startCountdownTimer(): void {
    this.timerSubscription = interval(10000).subscribe(() => {
      this.generateAutoPassword();
      this.countdown = 10;
    });

    this.countdownSubscription = interval(1000).subscribe(() => {
      this.countdown--;
      if (this.countdown <= 0) {
        this.countdown = 10;
      }
    });
  }
}
