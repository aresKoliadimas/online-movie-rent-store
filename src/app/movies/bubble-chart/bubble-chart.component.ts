import { Component } from '@angular/core';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-bubble-chart',
  templateUrl: './bubble-chart.component.html',
  styleUrls: ['./bubble-chart.component.scss'],
})
export class BubbleChartComponent {
  public bubbleChartOptions: ChartConfiguration<'bubble'>['options'] = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        min: 0,
        max: 30,
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
        max: 30,
        grid: {
          color: 'rgba(255,255,255, 0.2)',
        },
      },
    },
  };
  public bubbleChartLegend = false;

  public bubbleChartDatasets: ChartConfiguration<'bubble'>['data']['datasets'] =
    [
      {
        data: [
          { x: 10, y: 10, r: 10 },
          { x: 15, y: 5, r: 15 },
          { x: 26, y: 12, r: 23 },
          { x: 7, y: 8, r: 8 },
        ],
        backgroundColor: 'rgb(255, 255, 255)',
      },
    ];
}
