import { Component, OnInit } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { RentedMovie } from '../../shared/models';
import { MoviesService } from '../../shared/movies.service';

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
  isAdmin = false;
  sortedList!: RentedMovie[];
  loading = false;

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.isAdmin = this.service.isAdmin();
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
        this.sortedList = this.rentalsList.slice();
      });
  }

  onReturnMovie(uuid: string) {
    this.loading = true;
    this.service.returnMovie(uuid).subscribe((res) => {
      if (res) {
        this.getMyRentals(this.onlyActive);
        this.loading = false;
      }
    });
  }

  onPageChange(event: number) {
    this.page = event;
    this.getMyRentals(this.onlyActive);
  }

  onNoRentalsChange(event: any) {
    this.page = 1;
    this.noOfRentals = Number(event.target.value);
    this.getMyRentals(this.onlyActive);
  }

  onOnlyActiveRentalsChange(event: any) {
    if (event.target.value === 'Yes') {
      this.page = 1;
      this.onlyActive = true;
      this.getMyRentals(this.onlyActive);
    } else {
      this.onlyActive = false;
      this.getMyRentals(this.onlyActive);
    }
  }

  sortData(sort: Sort) {
    const data = this.rentalsList.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedList = data;
      return;
    }

    this.sortedList = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'user':
          return this.compare(a.user, b.user, isAsc);
        case 'title':
          return this.compare(a.movie, b.movie, isAsc);
        case 'rental-date':
          return this.compare(a.rental_date, b.rental_date, isAsc);
        case 'return-date':
          return this.compare(
            a.return_date ? a.return_date : '0',
            b.return_date ? b.return_date : '0',
            isAsc
          );

        case 'paid':
          return this.compare(a.is_paid, b.is_paid, isAsc);
        default:
          return 0;
      }
    });
  }

  compare(
    a: number | string | boolean,
    b: number | string | boolean,
    isAsc: boolean
  ) {
    return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
  }
}
