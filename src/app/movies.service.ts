import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MoviesList } from 'src/assets/models';

export interface AuthResult {
  access: string;
  refresh: string;
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly proxy = 'https://cors-anywhere.herokuapp.com/';
  private readonly endpoint = this.proxy + 'http://3.235.214.44:8000/';
  private readonly token = 'Bearer ' + localStorage.getItem('token');
  constructor(private http: HttpClient) {}

  login(username: String, password: string) {
    return this.http
      .post<AuthResult>(this.endpoint + 'auth/login/', {
        username,
        password,
      })
      .pipe(tap((res) => this.setSession(res)));
  }

  logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
  }

  private setSession(authResult: AuthResult) {
    localStorage.setItem('token', authResult.access);
    localStorage.setItem('id', 'user');
  }

  getMovies(): Observable<MoviesList> {
    return this.http.get<MoviesList>(this.endpoint + 'rent-store/movies/', {
      headers: {
        Authorization: this.token,
      },
    });
  }
}
