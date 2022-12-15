import { Component, OnInit } from '@angular/core';
import { Category, Movie, MoviesList } from 'src/app/shared/models';
import { MoviesService } from 'src/app/shared/movies.service';
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
  pageSizes: number[] = [];
  noOfMovies = 5;
  categories: string[] = ['All'];

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    for (let i = 5; i <= 100; i += 5) {
      this.pageSizes.push(i);
    }
    this.getMovies('All');
    this.service.getCategories().subscribe((categoriesList: Category[]) =>
      categoriesList.forEach((category) => {
        this.categories.push(category.name);
      })
    );
  }

  getMovies(category: string) {
    this.service
      .getMovies(this.page, this.noOfMovies, category)
      .subscribe((moviesList) => {
        this.moviesList = moviesList;
        this.movies = this.moviesList.results;
        this.totalMovies = this.moviesList.count;
      });
  }

  onNoMoviesChange(event: any) {
    this.page = 1;
    this.noOfMovies = Number(event.target.value);
    this.getMovies('All');
  }

  onPageChange(event: number) {
    this.page = event;
    this.getMovies('All');
  }

  onSelectCategory(event: any) {
    this.page = 1;
    const category = event.target.value;
    this.getMovies(category);
  }
}
