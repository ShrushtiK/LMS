import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url = "http://127.0.0.1:9090/login";
  public url1 = "http://127.0.0.1:9090/api/logout";

  constructor(public httpClient: HttpClient, public router: Router) { }

  loginUsers(user) {
    return this.httpClient.post<any>(this.url, user);
  }

  loggedIn() {
    return !!localStorage.getItem('token') && !!localStorage.getItem('_user_name_');
  }
  getToken() {
    return localStorage.getItem('token');
  }
  logoutUser() {
    localStorage.removeItem('token');
    localStorage.removeItem('_user_name_');
    this.router.navigate(['']);
    return this.httpClient.post<any>(this.url1, {});

  }
  verifyUser() {

  }

}
