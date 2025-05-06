import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthInterceptor implements HttpInterceptor {
  private hasRedirected = false;  

  constructor(private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';

    if (isLoggedIn && !this.hasRedirected && this.router.url === '/Login') {
      this.hasRedirected = true;
      this.router.navigate(['/News']).then(() => {
        window.location.reload();
      });
    }

    return next.handle(req).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 401) {
          this.router.navigate(['/error401Page']);
        } else if (error.status === 404) {
          this.router.navigate(['/error404Page']);
        }
        return throwError(() => error);
      })
    );
  }
}
