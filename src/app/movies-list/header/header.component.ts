import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  @Input() page!: string;
  constructor(private modalCtrl: ModalController, private router: Router) {}

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
    this.router.navigate(['/']);
  }
}
