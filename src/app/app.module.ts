import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/auth.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgChartsModule } from 'ng2-charts';

import { MyRentalsComponent } from './movies/my-rentals/my-rentals.component';
import { MoviesComponent } from './movies/movies.component';
import { BubbleChartComponent } from './movies/bubble-chart/bubble-chart.component';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { MovieCardComponent } from './movies/movies-list/movie-card/movie-card.component';
import { MovieDetailsModalComponent } from './movies/movies-list/movie-card/movie-details-modal/movie-details-modal.component';
import { HeaderComponent } from './movies/header/header.component';
import { ProfileModalComponent } from './movies/header/profile-modal/profile-modal.component';
import { AddMovieModalComponent } from './movies/header/add-movie-modal/add-movie-modal.component';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieCardComponent,
    MovieDetailsModalComponent,
    HeaderComponent,
    LoginComponent,
    ProfileModalComponent,
    MyRentalsComponent,
    MoviesComponent,
    BubbleChartComponent,
    AddMovieModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule,
    NgChartsModule,
  ],
  providers: [
    // FIXME: circural
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
