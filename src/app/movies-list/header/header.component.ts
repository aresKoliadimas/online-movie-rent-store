import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { MoviesService } from 'src/app/shared/movies.service';
import { ProfileModalComponent } from './profile-modal/profile-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private modalCtrl: ModalController) {}

  async openProfileModal() {
    const modal = await this.modalCtrl.create({
      component: ProfileModalComponent,
      cssClass: 'profile-modal',
      backdropDismiss: true,
    });
    return await modal.present();
  }
}
