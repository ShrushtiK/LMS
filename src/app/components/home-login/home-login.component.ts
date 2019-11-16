import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home-login',
  templateUrl: './home-login.component.html',
  styleUrls: ['./home-login.component.css']
})
export class HomeLoginComponent implements OnInit {
  loginData = {};
  email = "";
  username = "";
  password = "";
  constructor(public auth: AuthService, public router: Router) { }

  ngOnInit() {
  }

  loginUser() {
    this.loginData["Email_ID"] = this.email;
    this.loginData["Password"] = this.password;
    this.auth.loginUsers(this.loginData).subscribe(
      res => {
        localStorage.setItem('token', res.token);
        localStorage.setItem('_user_name_', res.user_name);
        this.router.navigate(['/dashboard']);
      },
      err => console.log(err)
    )
  }
}

