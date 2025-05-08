import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../services/local-storage.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent {
  currentUserName: string = '';
  isScrolled = false;
binding: any;

  constructor(
    private router: Router,
    private localStorageService: LocalStorageService
  ) {
    this.localStorageService.currentUser$.subscribe(user => {
      this.currentUserName = user ? user.Name : '';
    });
  }

  Logout() {
    this.localStorageService.logout();
    window.location.reload();
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 50;
  }
}
