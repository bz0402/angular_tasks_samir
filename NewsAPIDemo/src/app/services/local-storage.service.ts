import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface User {
  Name: string;
  Email: string;
  Password: string;
  Mobile: string;
  isLoggedIn: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {
  private readonly STORAGE_KEY = 'formData';
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ = this.currentUserSubject.asObservable();

  constructor() {
    this.loadCurrentUser();
  }

  private loadCurrentUser() {
    const users = this.getUsers();
    const currentUser = users.find(user => user.isLoggedIn);
    this.currentUserSubject.next(currentUser || null);
  }

  getUsers(): User[] {
    return JSON.parse(localStorage.getItem(this.STORAGE_KEY) || '[]');
  }

  saveUsers(users: User[]) {
    localStorage.setItem(this.STORAGE_KEY, JSON.stringify(users));
    this.loadCurrentUser();
  }

  login(email: string, password: string): boolean {
    const users = this.getUsers();
    const user = users.find(u => u.Email === email && u.Password === password);
    
    if (user) {
      user.isLoggedIn = true;
      this.saveUsers(users);
      return true;
    }
    return false;
  }

  logout() {
    const users = this.getUsers();
    const userIndex = users.findIndex(u => u.isLoggedIn);
    
    if (userIndex !== -1) {
      users[userIndex].isLoggedIn = false;
      this.saveUsers(users);
    }
  }

  updatePassword(currentPassword: string, newPassword: string): boolean {
    const users = this.getUsers();
    const currentUser = users.find(u => u.isLoggedIn);

    if (!currentUser || currentUser.Password !== currentPassword) {
      return false;
    }

    currentUser.Password = newPassword;
    this.saveUsers(users);
    return true;
  }

  registerUser(user: Omit<User, 'isLoggedIn'>) {
    const users = this.getUsers();
    users.push({ ...user, isLoggedIn: false });
    this.saveUsers(users);
  }
}