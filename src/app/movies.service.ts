import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { MoviesList } from 'src/assets/models';

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  private readonly proxy = 'https://cors-anywhere.herokuapp.com/';
  private readonly endpoint = 'http://3.235.214.44:8000/rent-store/';
  private readonly token =
    'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjcwNzU3MTY3LCJqdGkiOiIwNjYyM2UxZDRjYWY0NWZhYWU4NzA0NGU1YzNlYzc2ZiIsInVzZXJfaWQiOjIxLCJpc19hZG1pbiI6ZmFsc2V9.hC5xCtpxsFfUD__iaHf1HAm5T65BoBb8npYhSxC3D8g';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<MoviesList> {
    return this.http.get<MoviesList>(this.proxy + this.endpoint + 'movies', {
      headers: {
        Authorization: this.token,
      },
    });
  }
}
