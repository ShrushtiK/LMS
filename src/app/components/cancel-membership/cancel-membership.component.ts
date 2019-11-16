import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MembershipService } from '../../services/membership.service'
import { AuthService } from '../../services/auth.service'


@Component({
  selector: 'app-cancel-membership',
  templateUrl: './cancel-membership.component.html',
  styleUrls: ['./cancel-membership.component.css']
})
export class CancelMembershipComponent implements OnInit {

  constructor( public membershipService : MembershipService, public authService : AuthService, public router: Router ) { }

  ngOnInit() {
  }

  cancelMembership()
  {
    this.membershipService.cancelMembership().subscribe(
      res => {
        alert("Membership cancelled successfully")
        this.authService.logoutUser()
      },
      err => {
        alert(err.error)
      }
    )
  }

}
