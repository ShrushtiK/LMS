import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() failedCancellation = new EventEmitter<any>()

  constructor(public membershipService: MembershipService, public authService: AuthService, public router: Router, public memId: MemIdService) { }

  ngOnInit() {
    this.memId.currMemId.subscribe(id => this.Mem_Id = id);
  }

  cancelMembership() {
    this.membershipService.cancelMembership(this.Mem_Id).subscribe(
      res => {
        this.authService.logoutUser()
      },
      err => {
        this.failedCancellation.emit(err.error.data)
      }
    )
  }

}
