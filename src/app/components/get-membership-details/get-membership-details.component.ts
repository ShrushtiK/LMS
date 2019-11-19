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
  modal_title: string;
  modal_message: any;

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
    this.modal_title = "Success!"
    this.modal_message = "Your membership has been renewed successfully."
    console.log("New Date = ", date)
    this.member.End_Date = date
    $("#exampleModal").modal('show')
  }

  onFailedRenewal(msg : any)
  {
    this.modal_title = "Sorry!"
    this.modal_message = msg;
    $("#exampleModal").modal('show')
    //alert("Renewal failed: "+msg)
  }

  onFailedCancellation(msg : any)
  {
    this.modal_title = "Sorry!"
    this.modal_message = msg;
    //$("#exampleModal").modal({position: ["30%","50%"]})
    $("#exampleModal").modal('show')
  }

}
