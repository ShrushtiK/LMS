import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MembershipService } from '../../services/membership.service';
import { AuthService } from '../../services/auth.service';
import { MemIdService } from '../../services/mem-id.service';


@Component({
  selector: 'app-cancel-membership',
  templateUrl: './cancel-membership.component.html',
  styleUrls: ['./cancel-membership.component.css']
})
export class CancelMembershipComponent implements OnInit {
  Mem_Id: string;
  constructor(public membershipService: MembershipService, public authService: AuthService, public router: Router, public memId: MemIdService) { }

  ngOnInit() {
    this.memId.currMemId.subscribe(id => this.Mem_Id = id);
  }

  cancelMembership() {
    this.membershipService.cancelMembership(this.Mem_Id).subscribe(
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
