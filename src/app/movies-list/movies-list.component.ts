import { Component, OnInit } from '@angular/core';
import { Movie } from 'src/assets/models';
import moviesJson from '../../assets/movies.json';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.scss'],
})
export class MoviesListComponent implements OnInit {
  movies: Movie[] = [];

  ngOnInit(): void {
    this.movies = [...moviesJson.results];
  }
}
