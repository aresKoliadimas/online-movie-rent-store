import { Component, OnInit } from '@angular/core';
import { RentedMovie } from '../shared/models';
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: 'app-my-rentals',
  templateUrl: './my-rentals.component.html',
  styleUrls: ['./my-rentals.component.scss'],
})
export class MyRentalsComponent implements OnInit {
  rentalsList!: RentedMovie[];
  noOfRentals = 5;
  page = 1;
  pageSizes: number[] = [];
  totalRentals = 0;
  onlyActive = false;

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    for (let i = 5; i <= 20; i += 5) {
      this.pageSizes.push(i);
    }
    this.getMyRentals(this.onlyActive);
  }

  getMyRentals(onlyActive: boolean) {
    this.service
      .getRentals(this.page, this.noOfRentals, onlyActive)
      .subscribe((result) => {
        this.totalRentals = result.count;
        this.rentalsList = result.results;
      });
  }

  onReturnMovie(uuid: string) {
    this.service.returnMovie(uuid).subscribe();
    this.getMyRentals(this.onlyActive);
  }

  onPageChange(event: number) {
    this.page = event;
    this.getMyRentals(this.onlyActive);
  }

  onNoRentalsChange(event: any) {
    this.noOfRentals = Number(event.target.value);
    this.getMyRentals(this.onlyActive);
  }

  onOnlyActiveRentalsChange(event: any) {
    if (event.target.value === 'Yes') {
      this.onlyActive = true;
      this.getMyRentals(this.onlyActive);
    } else {
      this.onlyActive = false;
      this.getMyRentals(this.onlyActive);
    }
  }
}