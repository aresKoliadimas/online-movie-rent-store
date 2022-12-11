import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginCreds } from '../shared/models';
import { MoviesService } from '../shared/movies.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  form: FormGroup;

  constructor(
    private fBuilder: FormBuilder,
    private service: MoviesService,
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
      const loginCreds: LoginCreds = {
        username: values.username,
        password: values.password,
      };
      this.service.login(loginCreds).subscribe(() => {
        this.router.navigateByUrl('/');
      });
    }
  }
}
