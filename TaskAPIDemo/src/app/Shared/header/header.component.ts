import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;
  username = '';
  isDropdownOpen = false;

  constructor(
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    // Subscribe to auth state changes
    this.authService.currentUser.subscribe(user => {
      this.isLoggedIn = !!user;
      if (user) {
        this.username = user.name;
      } else {
        this.username = '';
      }
    });
  }

  toggleDropdown(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    if (this.isDropdownOpen) {
      this.isDropdownOpen = false;
    }
  }

  shouldShowLogin(): boolean {
    return !this.isLoggedIn && this.router.url !== '/auth';
  }

  shouldShowSignup(): boolean {
    return !this.isLoggedIn && this.router.url !== '/auth/signup';
  }

  logout() {
    this.authService.logout().subscribe({
      next: () => {
        this.isLoggedIn = false;
        this.username = '';
        this.isDropdownOpen = false;
        this.router.navigate(['/auth']);
      },
      error: (error) => {
        console.error('Logout failed on client side:', error);
      }
    });
  }
  
}
