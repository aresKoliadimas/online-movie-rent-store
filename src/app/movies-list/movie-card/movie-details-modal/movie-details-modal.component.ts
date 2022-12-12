import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/shared/models';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-movie-details-modal',
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.scss'],
})
export class MovieDetailsModalComponent implements OnInit {
  @Input() movie!: Movie;
  hours!: number;
  star = '⭐';
  stars = '';

  constructor(
    private service: MoviesService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit(): void {
    this.hours = Math.floor(this.movie.duration / 60);
    this.stars = this.star.repeat(Math.floor(this.movie.rating));
  }

  onRentMovie() {
    this.service
      .rentMovie(this.movie.uuid)
      .subscribe((rented) => console.log(rented));
    this.service.getRentals(1, 5).subscribe((list) => console.log(list));
  }

  onModalClose() {
    this.modalCtrl.dismiss();
  }
}
