import { Injectable, APP_ID } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor( private http:HttpClient) { }
  getUsers(){
    return this.http.get("http://localhost:3000/admin/users");
  }

  getUserDetails(id) {
    return this.http.get("http://localhost:3000/user/"+id);
  }

  createUser(id){
    console.log(id);
    return this.http.get("http://localhost:3000/admin/users");
  }

  admitStudent(id){
    console.log(id);
    return this.http.put("http://localhost:3000/admin/admitstudent",{id});
  }

  updateUser(user){
    console.log(user);
    return this.http.put("http://localhost:3000/admin/updateUser",{user});
  }

  deleteUser(id: String){
    console.log(id);
    return this.http.post("http://localhost:3000/admin/deleteUser", {id});
  }
  

}
