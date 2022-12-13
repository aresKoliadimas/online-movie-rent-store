import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';
import { MyRentalsComponent } from './movies/my-rentals/my-rentals.component';
import { MoviesComponent } from './movies/movies.component';
import { BubbleChartComponent } from './movies/bubble-chart/bubble-chart.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  {
    path: 'movies',
    component: MoviesComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'movies-list',
    component: MoviesListComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'my-rentals',
    component: MyRentalsComponent,
    canActivate: [AuthGuard],
  },
  {
    path: 'chart',
    component: BubbleChartComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
