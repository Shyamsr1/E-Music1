import { Component, OnInit, OnDestroy } from '@angular/core';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-updatestudent',
  templateUrl: './updatestudent.component.html',
  styleUrls: ['./updatestudent.component.css'],
})
export class UpdatestudentComponent implements OnInit, OnDestroy {
  users: UserModel[];
  showEditTable: boolean = false;
  editRowID: any = '';
  mySubscription: any;

  constructor(private userService: UserService, private _router: Router) {
    this._router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    this.mySubscription = this._router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this._router.navigated = false;
      }
    });
  }

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.users = JSON.parse(JSON.stringify(data));
      console.log(this.users);
    });
  }

  enableEdit(value) {
    this.editRowID = value;
  }

  updateRow(value) {
    this.users.forEach((user) => {
      if (user._id == value) {
        console.log(user);
        this.userService.updateUser(user).subscribe((data) => {
          console.log(data['text']);

          alert(data['text']);
          this._router.navigate(['/updatestudent']);
        });
      }
    });
  }

  cancelUpdate() {
    this.editRowID = '';
  }

  deleteRow(value) {
    if (
      confirm('Are you sure you want to delete the user? Press OK to continue.')
    ) {
      this.userService.deleteUser(value).subscribe((data) => {
        alert(data['text']);
        this._router.navigate(['/updatestudent']);
      });
    }
  }
  ngOnDestroy() {
    if (this.mySubscription) {
      this.mySubscription.unsubscribe();
    }
  }
}
