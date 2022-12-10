import { Component, Input, OnInit } from '@angular/core';
import { Movie } from 'src/assets/models';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Movie;

  ngOnInit(): void {
    console.log(this.movie);
  }
}
