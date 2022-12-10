import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/assets/models';

@Component({
  selector: 'app-movie-details-modal',
  templateUrl: './movie-details-modal.component.html',
  styleUrls: ['./movie-details-modal.component.scss'],
})
export class MovieDetailsModalComponent implements OnInit {
  @Input() movie!: Movie;
  hours!: number;
  star = '⭐';
  public stars = '';

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {
    this.hours = Math.floor(this.movie.duration / 60);
    this.stars = this.star.repeat(Math.floor(this.movie.rating));
    console.log(this.movie);
  }

  onModalClose() {
    this.modalCtrl.dismiss();
  }
}
