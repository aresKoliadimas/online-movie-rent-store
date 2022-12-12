import { Component, OnInit } from '@angular/core';
import { Movie, MoviesList } from 'src/app/shared/models';
import { MoviesService } from '../shared/movies.service';
@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  moviesList: MoviesList | undefined;
  movies: Movie[] = [];
  totalMovies = 0;
  page = 1;
  pageSizes = [5, 10, 15, 20, 25, 30];
  noOfMovies = 5;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  getMovies() {
    this.moviesService
      .getMovies(this.page, this.noOfMovies)
      .subscribe((moviesList) => {
        this.moviesList = moviesList;
        this.movies = this.moviesList.results;
        this.totalMovies = this.moviesList.count;
      });
  }

  onNoMoviesChange(event: any) {
    this.noOfMovies = Number(event.target.value);
    this.getMovies();
  }

  onPageChange(event: number) {
    this.page = event;
    this.getMovies();
  }
}
