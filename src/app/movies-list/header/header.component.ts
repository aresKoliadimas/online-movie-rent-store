import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private service: MoviesService, private router: Router) {}

  logout() {
    this.service.logout();
    this.router.navigate(['/login']);
  }
}
