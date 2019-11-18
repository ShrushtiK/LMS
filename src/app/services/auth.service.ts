import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public url = "http://127.0.0.1:9000/member/login";
  public url1 = "http://127.0.0.1:9090/api/logout";
  public url2 = "http://127.0.0.1:9000/member/create";

  constructor(public httpClient: HttpClient, public router: Router) { }

  loginUsers(user) {
    return this.httpClient.post<any>(this.url, user);
  }
  loggedIn() {
    return !!sessionStorage.getItem('_x_');
    //return true;
  }
  // getToken() {
  //   return localStorage.getItem('token');
  // }
  logoutUser() {
    sessionStorage.removeItem('_x_');
    this.router.navigate(['']);
    //return this.httpClient.post<any>(this.url1, {});
  }
  registerUser(user) {
    return this.httpClient.post<any>(this.url2, user);

  }
  verifyUser() {

  }

}
