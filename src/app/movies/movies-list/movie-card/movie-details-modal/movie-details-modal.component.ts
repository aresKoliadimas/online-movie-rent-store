import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie, RentalsList, RentedMovie } from 'src/app/shared/models';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-movie-details-modal',
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.scss'],
})
export class MovieDetailsModalComponent implements OnInit {
  @Input() movie!: Movie;
  hours!: number;
  private readonly star = '⭐';
  stars = '';
  rentals!: RentedMovie[];
  isRented = false;
  loading = true;

  constructor(
    private service: MoviesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.isMovieRented();
    this.hours = Math.floor(this.movie.duration / 60);
    this.stars = this.star.repeat(Math.floor(this.movie.rating));
  }

  onRentMovie() {
    this.loading = true;
    this.service.rentMovie(this.movie.uuid).subscribe((res) => {
      if (res) {
        this.loading = false;
        this.modalCtrl.dismiss();
      }
    });
  }

  isMovieRented() {
    this.service.getRentals(1, 200, true).subscribe((result: RentalsList) => {
      const rentedMovies = result.results.map((movie) => movie.movie);
      rentedMovies.includes(this.movie.title)
        ? (this.isRented = true)
        : (this.isRented = false);
      this.loading = false;
    });
  }

  onModalClose() {
    this.modalCtrl.dismiss();
  }
}
