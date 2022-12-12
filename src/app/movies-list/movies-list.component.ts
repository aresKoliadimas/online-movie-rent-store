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
  pageSize = 5;

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    this.moviesService
      .getMovies(this.page, this.pageSize)
      .subscribe((moviesList) => {
        this.moviesList = moviesList;
        this.movies = this.moviesList.results;
        this.totalMovies = this.moviesList.count;
        console.log(this.moviesList);
      });
  }

  pageChange($event: any) {
    console.log(this.page);
  }
}
