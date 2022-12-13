import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './shared/auth.guard';
import { LoginComponent } from './login/login.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MyRentalsComponent } from './my-rentals/my-rentals.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: MoviesListComponent, canActivate: [AuthGuard] },
  {
    path: 'my-rentals',
    component: MyRentalsComponent,
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
