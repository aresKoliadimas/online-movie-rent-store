import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieCardComponent } from './movies-list/movie-card/movie-card.component';
import { MovieDetailsModalComponent } from './movies-list/movie-card/movie-details-modal/movie-details-modal.component';
import { IonicModule } from '@ionic/angular';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { HeaderComponent } from './movies-list/header/header.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AuthInterceptor } from './shared/auth.interceptor';
import { NgxPaginationModule } from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    MoviesListComponent,
    MovieCardComponent,
    MovieDetailsModalComponent,
    HeaderComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot(),
    ReactiveFormsModule,
    NgxPaginationModule,
  ],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS,
    //   useClass: AuthInterceptor,
    //   multi: true,
    // },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
