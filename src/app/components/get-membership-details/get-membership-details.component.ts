import { Component, OnInit } from '@angular/core';

import { MembershipService } from '../../services/membership.service'

@Component({
  selector: 'app-get-membership-details',
  templateUrl: './get-membership-details.component.html',
  styleUrls: ['./get-membership-details.component.css']
})
export class GetMembershipDetailsComponent implements OnInit {

  member : any = {}
  constructor( public membershipService : MembershipService ) { 
    membershipService.memberDetails().subscribe(
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

}
