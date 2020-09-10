import { Injectable } from '@angular/core';
import { UserModel } from './user.model';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _registerUrl = 'http://localhost:3000/user/signup';
  private _loginUrl = 'http://localhost:3000/user/login';


  private isAuthenticated = false;
  private token: string;
  private id: string;
  private role: string;
  private username: string;
  private authStatusListener = new Subject<boolean>();

  constructor(private http: HttpClient, private router: Router) {}

  gettoken() {
    return this.token;
  }

  getIsAuth() {
    return this.isAuthenticated;
  }

  getId() {
    return this.id;
  }
  
  getrole() {
    return this.role;
  }

  getusername() {
    return this.username;
  }

  getAuthStatusListener() {
    return this.authStatusListener.asObservable();
  }

  loginUser(email: string, password: string) {
    // const userModel: UserModel = { email: email, password: password };
    this.http
      .post<{
        token: string;
        id: string;
        role: string;
        username: string;
      }>('http://localhost:3000/user/login', {email, password})
      .subscribe(
        (response) => {
          const token = response.token;
          this.token = token;
          if (token) {
            this.isAuthenticated = true;
            this.id = response.id;
            this.role = response.role;
            this.username = response.username;
            this.authStatusListener.next(true);
            this.saveAuthData( token, this.id, this.role, this.username); 
          }
        },
        (error) => {
          console.log(error.error.message);
          alert(error.error.message);
          this.authStatusListener.next(false);
          
        }
      );
  }


  logout() {
    this.token = null;
    this.isAuthenticated = false;
    this.authStatusListener.next(false);
    this.id = null;

    this.clearAuthData();
    this.router.navigate(['/']);
  }


  private saveAuthData(
    token: string,
    id: string,
    role: string,
    username: string
  ) {
    localStorage.setItem('token', token);
    localStorage.setItem('id', id);
    localStorage.setItem('role', role);
    localStorage.setItem('username', username);
    if (role == 'admin') {
      this.router.navigate(['/admin']);
    } else if (role == 'Student') {
      this.router.navigate(['/basic']);
    }
  }

  private clearAuthData() {
    localStorage.removeItem('token');
    localStorage.removeItem('id');
    localStorage.removeItem('role');
    localStorage.removeItem('username');
  }

  getAuthData() {
    const token = localStorage.getItem('token');
    const id = localStorage.getItem('id');
    const role = localStorage.getItem('role');
    const username = localStorage.getItem('username');
    if (!token) {
      return;
    }
    return {
      token: token,
      id: id,
      role: role,
      username: username,
    };
  }


  // user create and Login 
  createUser(email: any, username: any, password: any, phonenumber: any, inputselect: any) {
    console.log(email,username,password,phonenumber,inputselect);
    return this.http.post(this._registerUrl, {
      email, username, password, phonenumber, inputselect
    });
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getToken() {
    return localStorage.getItem('token');
  }

}
