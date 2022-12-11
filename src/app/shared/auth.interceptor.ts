import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Observable, switchMap, throwError } from 'rxjs';
import { AuthResult, UserProfile } from './models';
import { MoviesService } from './movies.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private jwtHelper: JwtHelperService,
    private service: MoviesService,
    private router: Router
  ) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (req.url.indexOf('login') > -1 || req.url.indexOf('refresh') > -1) {
      return next.handle(req);
    }
    const localTokens = localStorage.getItem('tokens');
    let tokens: AuthResult;
    if (localTokens) {
      tokens = JSON.parse(localTokens) as AuthResult;
      const isTokenExpired = this.jwtHelper.isTokenExpired(tokens?.access);
      if (!isTokenExpired) {
        return next.handle(req);
      } else {
        return this.service.refreshToken(tokens).pipe(
          switchMap((newTokens: any) => {
            localStorage.setItem('tokens', JSON.stringify(newTokens));
            var userInfo = this.jwtHelper.decodeToken(
              newTokens.access
            ) as UserProfile;
            this.service.userProfile.next(userInfo);
            const transformedReq = req.clone({
              headers: req.headers.set(
                'Authorization',
                `Bearer ${newTokens.access}`
              ),
            });
            return next.handle(transformedReq);
          })
        );
      }
    }
    this.router.navigate(['/']);
    return throwError(() => 'Invalid call');
  }
}
