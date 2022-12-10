import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MoviesList } from 'src/assets/models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly endpoint = 'http://3.235.214.44:8000/rent-store/';
  private readonly token =
    'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwNjcyMzM4LCJqdGkiOiJlZTI3OTQ0OWQwOTE0NmRjYWY4ZWIwZjI1M2ZmMTNmZSIsInVzZXJfaWQiOjIxLCJpc19hZG1pbiI6ZmFsc2V9.kHsC9Zp75F06NIrrWZ9wTeCK-1aIjRMwaR81DT2sBy8';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MoviesList> {
    return this.http.get<MoviesList>(this.endpoint, {
      headers: {
        Authorization: `Token = ${this.token}`,
      },
    });
  }
}
