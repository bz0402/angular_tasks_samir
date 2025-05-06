import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  standalone: false
})
export class HeaderComponent {
  


  constructor(private router: Router) {
    
  }
  formData: any[] = JSON.parse(localStorage.getItem('formData') || '[]');
  currentUser = this.formData.find((user: any) => user.isLoggedIn === true);
  currentUserName: string = this.currentUser ? this.currentUser.Name : '';

  Logout() {
    const index = this.formData.findIndex((user: any) => user.isLoggedIn === true);
    if (index !== -1) {
      this.formData[index].isLoggedIn = false;
      localStorage.setItem('formData', JSON.stringify(this.formData));
      window.location.reload();
    }
  }
  isScrolled = false;


  @HostListener('window:scroll', [])
  onWindowScroll() {
    if (window.scrollY > 50) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }

}
