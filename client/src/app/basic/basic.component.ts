import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';
import { Router, NavigationEnd } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-basic',
  templateUrl: './basic.component.html',
  styleUrls: ['./basic.component.css']
})
export class BasicComponent implements OnInit {
  user:UserModel;
  
  constructor(public _router: Router, private userService: UserService, private authService: AuthService) {
    this.userService.getUserDetails(this.authService.getId()).subscribe(result => {
      this.user = JSON.parse(JSON.stringify(result)).result;
      console.log(this.user);
    });
  }

  ngOnInit(): void {
    console.log(this.authService.getId());
    
  }



}
