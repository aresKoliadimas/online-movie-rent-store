import { Component, Input } from '@angular/core';
import { Movie } from 'src/assets/models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  ngOnInit() {
    console.log(this.movie);
  }
}
