import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Profile } from 'src/app/shared/models';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-profile-modal',
  templateUrl: './profile-modal.component.html',
  styleUrls: ['./profile-modal.component.scss'],
})
export class ProfileModalComponent implements OnInit {
  profile!: Profile;

  constructor(
    private service: MoviesService,
    private router: Router,
    private alert: AlertController
  ) {}

  ngOnInit() {
    this.getProfile();
  }

  async onDeposit() {
    const alert = await this.alert.create({
      header: 'Please enter your desired amount',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            this.alert.dismiss();
          },
        },
        {
          text: 'OK',
          role: 'confirm',
          handler: (data) => {
            this.onDepositAmount(Number(data.amount));
            this.alert.dismiss();
          },
        },
      ],
      inputs: [
        {
          name: 'amount',
          type: 'number',
          placeholder: '€',
          min: 1,
          max: 1000,
        },
      ],
    });
    await alert.present();
  }

  private getProfile() {
    this.service.getProfile().subscribe((profile) => (this.profile = profile));
  }

  private onDepositAmount(amount: number) {
    this.service.depositMoney(amount).subscribe();
    this.getProfile();
  }

  onLogout() {
    this.service.logout();
    this.router.navigate(['/login']);
  }
}
