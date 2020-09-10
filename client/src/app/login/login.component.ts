import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../auth.service';
import { FormBuilder, Validators, NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
 
  constructor(
    public authService: AuthService,
    public _router: Router,
  ) {}
 
  onLogin(form: NgForm) {
    if (form.invalid) {
      return;
    }

    this.authService.loginUser(form.value.email, form.value.password);

  }

  ngOnInit(): void {}

}
