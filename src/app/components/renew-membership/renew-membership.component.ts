import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { MembershipService } from '../../services/membership.service';
import { MemIdService } from '../../services/mem-id.service';

@Component({
  selector: 'app-renew-membership',
  templateUrl: './renew-membership.component.html',
  styleUrls: ['./renew-membership.component.css']
})
export class RenewMembershipComponent implements OnInit {
  Mem_Id: string;
  constructor(public membershipService: MembershipService, public router: Router, public memId: MemIdService) { }

  ngOnInit() {
    this.memId.currMemId.subscribe(id => this.Mem_Id = id);
  }

  renewMembership() {
    this.membershipService.renewMembership(this.Mem_Id).subscribe(
      res => {
        alert("Membership renewed successfully")
      },
      err => {
        alert(err.error)
      }
    )
  }
}
