import { Component, OnInit } from '@angular/core';
import { ChartConfiguration } from 'chart.js';
import { Movie, MoviesList } from 'src/app/shared/models';
import { MoviesService } from 'src/app/shared/movies.service';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss'],
})
export class BubbleChartComponent implements OnInit {
  years: any[] = [];

  constructor(private service: MoviesService) {}

  ngOnInit(): void {
    this.service.getMovies(1, 1000, 'All').subscribe((movies: MoviesList) => {
      movies.results.forEach((movie: Movie) => {
        this.years.push({ x: movie.pub_date, y: movie.rating, r: 0 });
      });
      this.years.map((movie) => {
        this.years.forEach((m) => {
          if (movie.x === m.x && movie.y === m.y) {
            movie.r++;
          }
        });
      });
      this.years = this.years.filter(
        (value, index, self) =>
          index ===
          self.findIndex(
            (t) => t.x === value.x && t.y === value.y && t.r === value.r && t.x
          )
      );
    });
  }

  public bubbleChartOptions: ChartConfiguration<'bubble'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        min: 1900,
        max: 2022,
        grid: {
          color: 'rgba(255,255,255, 0.2)',
        },
        title: {
          text: 'Year',
          display: true,
        },
      },
      y: {
        min: 0,
        max: 10,
        grid: {
          color: 'rgba(255,255,255, 0.2)',
        },
        title: {
          text: 'Rating',
          display: true,
        },
      },
    },
  };
  public bubbleChartLegend = false;

  public bubbleChartDatasets: ChartConfiguration<'bubble'>['data']['datasets'] =
    [
      {
        data: this.years,
        backgroundColor: 'rgb(255, 255, 255)',
      },
    ];
}
