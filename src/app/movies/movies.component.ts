import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
})
export class MoviesComponent implements OnInit {
  isAdmin = false;

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.isAdmin = this.service.isAdmin();
  }
}
