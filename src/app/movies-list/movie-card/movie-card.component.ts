import { Component, Input } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/shared/models';
import { MovieDetailsModalComponent } from './movie-details-modal/movie-details-modal.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  constructor(private modalCtrl: ModalController) {}

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
