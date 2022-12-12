import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, catchError, map, Observable, of } from 'rxjs';
import {
  AuthResult,
  LoginCreds,
  MoviesList,
  UserProfile,
} from 'src/app/shared/models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly proxy = 'https://cors-anywhere.herokuapp.com/';
  private readonly endpoint = this.proxy + 'http://3.235.214.44:8000/';
  userProfile = new BehaviorSubject<UserProfile | null>(null);
  jwtService: JwtHelperService = new JwtHelperService();

  constructor(private http: HttpClient) {}

  login(loginCreds: LoginCreds) {
    return this.http
      .post<AuthResult>(this.endpoint + 'auth/login/', loginCreds)
      .pipe(
        map((resTokens: AuthResult) => {
          localStorage.setItem('tokens', JSON.stringify(resTokens));
          const userInfo = this.jwtService.decodeToken(
            resTokens.access
          ) as UserProfile;
          this.userProfile.next(userInfo);
          return true;
        }),
        catchError((error) => {
          console.log(error);
          return of(false);
        })
      );
  }

  getToken(): string {
    const tokens = localStorage.getItem('tokens');
    if (tokens) {
      const token = JSON.parse(tokens) as AuthResult;
      const isTokenExpired = this.jwtService.isTokenExpired(token.access);
      if (isTokenExpired) {
        this.userProfile.next(null);
        return '';
      }
      const userInfo = this.jwtService.decodeToken(token.access) as UserProfile;
      this.userProfile.next(userInfo);
      return token.access;
    }
    return '';
  }

  refreshToken(tokens: AuthResult) {
    return this.http.post(this.endpoint + '/auth/refresh/', tokens);
  }

  isLoggedIn() {
    return !!localStorage.getItem('tokens');
  }

  logout() {
    localStorage.removeItem('tokens');
  }

  getMovies(page: number, pageSize: number): Observable<MoviesList> {
    const token = 'Bearer ' + this.getToken();
    const url = this.endpoint + 'rent-store/movies/';
    let params = new HttpParams();
    params = params.append('page', page);
    params = params.append('page_size', pageSize);
    return this.http.get<MoviesList>(url, {
      headers: {
        Authorization: token,
      },
      params: params,
    });
  }
}
