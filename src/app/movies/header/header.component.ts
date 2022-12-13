import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MoviesService } from 'src/app/shared/movies.service';
import { AddMovieModalComponent } from './add-movie-modal/add-movie-modal.component';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() page!: string;
  isAdmin = false;
  constructor(
    private service: MoviesService,
    private modalCtrl: ModalController,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.isAdmin = this.service.isAdmin();
  }

  async openProfileModal() {
    const modal = await this.modalCtrl.create({
      component: ProfileModalComponent,
      cssClass: 'profile-modal',
      backdropDismiss: true,
    });
    return await modal.present();
  }

  navigateToMyRentals() {
    this.router.navigate(['/my-rentals']);
  }

  navigateToAllMovies() {
    this.router.navigate(['/movies']);
  }

  navigateToMoviesChart() {
    this.router.navigate(['/chart']);
  }

  async openAddMovieModal() {
    const modal = await this.modalCtrl.create({
      component: AddMovieModalComponent,
      cssClass: 'add-movie-modal',
      backdropDismiss: true,
    });
    return await modal.present();
  }
}
