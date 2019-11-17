import { Component, OnInit } from '@angular/core';

import { MembershipService } from '../../services/membership.service';
import { MemIdService } from '../../services/mem-id.service';

@Component({
  selector: 'app-get-membership-details',
  templateUrl: './get-membership-details.component.html',
  styleUrls: ['./get-membership-details.component.css']
})
export class GetMembershipDetailsComponent implements OnInit {
  Mem_Id: string;
  member: any = {}
  constructor(public membershipService: MembershipService, public memId: MemIdService) {
    this.memId.currMemId.subscribe(id => this.Mem_Id = id);
    console.log(this.Mem_Id);
    membershipService.memberDetails(this.Mem_Id).subscribe(
      res => {
        this.member = res;
      },
      err => {
        alert(err);
      }
    )

  }

  ngOnInit() {

  }

  onUpdateEndDate(date : Date)
  {
    console.log("New Date = ", date)
    this.member.End_Date = date
  }

  onFailedRenewal(msg : any)
  {
    alert("Renewal failed: "+msg)
  }

  onFailedCancellation(msg : any)
  {
    alert("Cancellation failed: "+msg)
    console.log(msg)
  }

}
