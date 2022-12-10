import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/assets/models';
import { MovieDetailsModalComponent } from './movie-details-modal/movie-details-modal.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;

  constructor(private modalCtrl: ModalController) {}

  ngOnInit(): void {}

  async openMovieModal(movie: Movie) {
    const modal = await this.modalCtrl.create({
      component: MovieDetailsModalComponent,
      cssClass: 'movie-modal',
      backdropDismiss: false,
      componentProps: {
        movie: movie,
      },
    });
    return await modal.present();
  }
}
