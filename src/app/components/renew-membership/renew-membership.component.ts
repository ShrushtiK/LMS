import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MembershipService } from '../../services/membership.service'

@Component({
  selector: 'app-renew-membership',
  templateUrl: './renew-membership.component.html',
  styleUrls: ['./renew-membership.component.css']
})
export class RenewMembershipComponent implements OnInit {

  constructor( public membershipService : MembershipService, public router: Router ) { }

  ngOnInit() {
  }

  renewMembership()
  {
    this.membershipService.renewMembership().subscribe(
      res => {
        alert("Membership renewed successfully")
      },
      err => {
        alert(err.error)
      }
    )    
  }
}
