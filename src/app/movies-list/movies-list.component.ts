import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/assets/models';
import moviesJson from '../../assets/movies.json';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];

  constructor(private moviesService: MoviesService) {}

  ngOnInit(): void {
    // this.moviesService
    //   .getMovies()
    //   .subscribe((moviesList) => console.log(moviesList));
    this.movies = [...moviesJson.results];
  }
}
