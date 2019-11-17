import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() updateEndDate = new EventEmitter<Date>()
  @Output() failedRenewal = new EventEmitter<any>()

  constructor(public membershipService: MembershipService, public router: Router, public memId: MemIdService) { }

  ngOnInit() {
    this.memId.currMemId.subscribe(id => this.Mem_Id = id);
  }

  renewMembership() {
    this.membershipService.renewMembership(this.Mem_Id).subscribe(
      res => {
        console.log("Membership renewed successfully")
        this.updateEndDate.emit(res.body.data.End_Date)
      },
      err => {
        console.log(err.error)
        this.failedRenewal.emit(err.error.data)
      }
    )
  }
}
