import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Movie } from 'src/app/shared/models';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-add-movie-modal',
  templateUrl: './add-movie-modal.component.html',
  styleUrls: ['./add-movie-modal.component.scss'],
})
export class AddMovieModalComponent {
  movie!: Movie;

  constructor(private service: MoviesService, private modal: ModalController) {}

  addMovie() {
    // this.movie = new Movie();
    this.service.addMovie(this.movie).subscribe((res) => {
      if (res) {
        this.modal.dismiss();
      }
    });
  }
}
