import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MoviesService } from '../movies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private mService: MoviesService,
    private router: Router
  ) {
    this.form = this.fBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  login() {
    const values = this.form.value;
    if (values.username && values.password) {
      this.mService.login(values.username, values.password).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }
}
