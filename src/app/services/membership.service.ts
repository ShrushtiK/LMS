import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service'

@Injectable({
  providedIn: 'root'
})
export class MembershipService {

  renew_membership_url: string = "http://127.0.0.1:9000/member/renew"
  cancel_membership_url: string = "http://127.0.0.1:9000/member/cancel"
  membership_details_url: string = "http://127.0.0.1:9000/member/details"
  membership_id: string = "5dce0c8b8ecacb03a8a9d36f"

  constructor(public httpClient: HttpClient, public authService: AuthService) { 
    //set this.membership_id
  }

  memberDetails()
  {
    let params = new HttpParams().set('Membership_ID',this.membership_id)
    return this.httpClient.get<any>(this.membership_details_url, {params:params})
  }
  
  renewMembership()
  {
    return this.httpClient.post<any>(this.renew_membership_url,{"Membership_ID":this.membership_id},{observe:'response'})
  }

  cancelMembership()
  {
    return this.httpClient.post<any>(this.cancel_membership_url,{"Membership_ID":this.membership_id},{observe:'response'})
  }


}
