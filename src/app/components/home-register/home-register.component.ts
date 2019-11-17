import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-home-register',
  templateUrl: './home-register.component.html',
  styleUrls: ['./home-register.component.css']
})
export class HomeRegisterComponent implements OnInit {
  r = {};
  email = "";
  username = "";
  ph_no = "";
  password = "";
  resp: any;
  constructor(public auth: AuthService) { }

  ngOnInit() {
  }

  registerData() {
    this.r["Name"] = this.username;
    this.r['Email_ID'] = this.email;
    this.r["Phone_Number"] = this.ph_no;
    this.r["Password"] = this.password;
    this.auth.registerUser(this.r).subscribe(res => {
      if (res['msg'] === "Success") {
        alert('Registeration Successful!');
        this.email = "";
        this.username = "";
        this.ph_no = "";
        this.password = "";
      }
    },
      err => {
        alert(err.error['data']);
        this.email = "";
        this.username = "";
        this.ph_no = "";
        this.password = "";
      }
    );

    // res => {
    //   if (res['msg'] === "Error") {
    //     alert(res['data']);
    //   }
    //   else if (res['msg'] === "Success") {
    //     alert('Registeration Successful!!');
    //   }

    // };
  }

}
