import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap, BehaviorSubject, throwError, catchError } from 'rxjs';

export interface User {
  name: string;
  email: string;
  accessToken: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser = this.currentUserSubject.asObservable();
  private baseUrl = 'https://taskflowapi.vercel.app/api';

  constructor(private http: HttpClient) {
    const token = localStorage.getItem('accessToken');
    if (token) {
      this.currentUserSubject.next({
        name: localStorage.getItem('userName') || '',
        email: localStorage.getItem('userEmail') || '',
        accessToken: token
      });
    }
  }

  signup(userData: { name: string; email: string; password: string; role: string }): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/signup`, userData).pipe(
      tap((response: any) => {
        if (response.success && response.data?.accessToken) {
          localStorage.setItem('accessToken', response.data.accessToken);
          localStorage.setItem('userName', userData.name);
          localStorage.setItem('userEmail', userData.email);
          localStorage.setItem('userRole', userData.role);
          this.currentUserSubject.next({
            name: userData.name,
            email: userData.email,
            accessToken: response.data.accessToken,
          });
        }
      })
    );
  }

  login(loginData: any): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/signin`, loginData).pipe(
      tap((response: any) => {
        if (response.success && response.data.tokens?.accessToken) {
          localStorage.setItem('accessToken', response.data.tokens?.accessToken);
          localStorage.setItem('userName', response.data.user.name);
          localStorage.setItem('userEmail', response.data.user.email);
          localStorage.setItem('userRole', response.data.user.role);
          this.currentUserSubject.next({
            name: response.data.user.name,
            email: response.data.user.email,
            accessToken: response.data.tokens.accessToken,

          });
        }
      })
    );
  }

  forgotPassword(email: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/forgot-password`, { email });
  }

  logout(): Observable<any> {
    return this.http.post(`${this.baseUrl}/users/signout`, {}).pipe(
      tap({
        next: () => {
          localStorage.removeItem('accessToken');
          localStorage.removeItem('userName');
          localStorage.removeItem('userEmail');
          localStorage.removeItem('userRole');
          this.currentUserSubject.next(null);
        },
        error: (err) => {
          console.error('Server logout failed, but clearing local data:', err);
          this.currentUserSubject.next(null);
          localStorage.clear();
        }
      }),
      catchError((error) => {
        console.error('Logout error caught:', error);
        if (this.isAuthenticated()) {
          localStorage.clear();
          this.currentUserSubject.next(null);
        }
        return throwError(() => new Error('Logout failed. Please try again.'));
      })
    );
  }
  

  isAuthenticated(): boolean {
    return !!localStorage.getItem('accessToken');
  }
}