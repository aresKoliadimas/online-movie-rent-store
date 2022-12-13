import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Category, Movie } from 'src/app/shared/models';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-add-movie-modal',
  templateUrl: './add-movie-modal.component.html',
  styleUrls: ['./add-movie-modal.component.scss'],
})
export class AddMovieModalComponent implements OnInit {
  categories: any[] = [];
  movie = new Movie('', 0, 0, 0, '', []);
  loading = false;

  constructor(
    private service: MoviesService,
    private modal: ModalController,
    private alertController: AlertController
  ) {}

  ngOnInit(): void {
    this.service.getCategories().subscribe((categoriesList: Category[]) => {
      categoriesList.forEach((category) => {
        this.categories.push({ category: category.name, checked: false });
      });
    });
  }

  async alert(text: string) {
    const alert = await this.alertController.create({
      header: 'Alert',
      subHeader: text,
      buttons: ['OK'],
    });
    await alert.present();
  }

  addMovie() {
    this.loading = true;
    if (this.movie.title === '') {
      this.alert('Please enter a title');
      this.loading = false;
      return;
    }
    if (!this.movie.categories.length) {
      this.alert('Please choose at least one category');
      this.loading = false;
      return;
    }
    this.movie.categories = this.categories
      .filter((category) => category.checked)
      .map((category) => category.category);
    this.service.addMovie(this.movie).subscribe((res) => {
      if (res) {
        this.modal.dismiss();
      }
    });
  }

  cancel() {
    this.modal.dismiss();
  }
}
