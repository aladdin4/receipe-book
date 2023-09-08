import {
  HttpHandler,
  HttpInterceptor,
  HttpParams,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from './auth-service.service';
import { exhaustMap, map, take, tap } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService, private router: Router) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    return this.authService.authSubject.pipe(
      take(1),
      exhaustMap((authObj) => {
        if (!authObj) {
          return next.handle(req);
        }
        let modReq = req.clone({
          params: new HttpParams().set('auth', authObj.idToken),
        });
        return next.handle(modReq);
      })
    );
  }
}
