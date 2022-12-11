import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/app/shared/models';
import { MoviesService } from '../shared/movies.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getMovies()
      .subscribe((moviesList) => (this.movies = moviesList.results));
  }
}
