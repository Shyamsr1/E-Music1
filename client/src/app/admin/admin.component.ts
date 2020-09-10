import { Component, OnInit } from '@angular/core';
import { UserModel } from '../user.model';
import { UserService } from '../user.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
users: UserModel[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
      this.userService.getUsers().subscribe((data)=>{
      
      this.users=JSON.parse(JSON.stringify(data));
      console.log(this.users);
      
    })

  }
admit(id) {
  console.log(id);
  this.userService.admitStudent(id).subscribe((data) =>{
    console.log(data);
    this.userService.getUsers().subscribe((data)=>{
    this.users=JSON.parse(JSON.stringify(data));
  });
});
}
}
