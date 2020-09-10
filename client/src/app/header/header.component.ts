import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { UserService } from '../user.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role: any;

  constructor(private authService: AuthService, public _router: Router, private userService: UserService) {
}

  ngOnInit(): void {
    }

  logout() {
    this.authService.logout();
  }

  checkLoggedIn() {
    return this.authService.loggedIn();
  }
  checkAdmin() {
    const role = this.authService.getrole();
    if(role == 'admin') {
      return true;
    }
    return false;
  }

}
