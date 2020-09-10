import {
  Component,
  OnInit,
  ViewChild,
  ElementRef,
  OnDestroy,
} from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../auth.service';
import {
  FormsModule,
  ReactiveFormsModule,
  FormGroup,
  FormBuilder,
  FormControl,
  NgForm,
  Validators,
} from '@angular/forms';
import * as M from 'materialize-css';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})


export class SignupComponent implements OnInit {
  
  signupForm: FormGroup;

  batch = [
    'September Batch - Music Basic - Morning- 9am to 10am',
    'September Batch - Music Basic - Evening- 6pm to 7pm',
    'September Batch - Harikatha - Morning- 7am to 8am',
    'September Batch - Harikatha - Evening- 8pm to 9pm',
    'September Batch - Music Advance - Morning- 11am to 12pm',
    'September Batch - Music Advance - Evening- 4pm to 5pm',
  ];

  constructor(
    public authService: AuthService,
    public _router: Router
  )  {}

  ngOnInit() {

    this.signupForm = new FormGroup({
      email: new FormControl(null, {
        validators: [
          Validators.required, 
          Validators.email, 
          Validators.pattern(/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/)
        ],
      }),
      password: new FormControl(null, {
        validators: [
            Validators.required,
            Validators.minLength(8)
          ]}),
      phonenumber: new FormControl(null,{
        validators: [
            Validators.required,
            Validators.minLength(10),
            Validators.maxLength(16)
      ]}),
      username: new FormControl(null, {
        validators:[
        Validators.required]}),

      inputselect: new FormControl(null,{
        validators:[
        Validators.required]})

    });

    this.signupForm.get('email').valueChanges.subscribe(value => {
      // console.log(value);
      this.signupForm.patchValue({username: value});
    });
  
  }
  
  onSignup() {
    if (this.signupForm.invalid) {
      return;
    }
  
    this.authService.createUser(
      this.signupForm.get('email').value,
      this.signupForm.get('username').value,
      this.signupForm.get('password').value,
      this.signupForm.get('phonenumber').value,
      this.signupForm.get('inputselect').value
    ).subscribe(
      (res) => {
        console.log('Observer got a next value: ', res);
        alert('Thank you for your interest, you shall be notified shortly');
        this._router.navigate(['/']);
      },
      (err) => console.log('Observer got an error: ', err),
      () => console.log('Observer got a complete notification')
  )
  
}

  ngAfterViewInit() {}
  
}
