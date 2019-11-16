import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { AuthService } from './auth.service'


@Injectable({
  providedIn: 'root'
})


export class TransactionService {

  transaction_history_url = "http://127.0.0.1:9000/member/history";
  transaction_renew_url = "http://127.0.0.1:9000/copy/renew";
  Membership_ID : string = "5dce0c8b8ecacb03a8a9d36f"

  constructor(public httpClient: HttpClient) { }

  getActiveTransactions()
  {
    let params = new HttpParams().set('Membership_ID', this.Membership_ID);
    params = params.append('Active',"true");
    return this.httpClient.get<any>(this.transaction_history_url, {params : params});
  }

  getAllTransactions()
  {
    let params = new HttpParams().set('Membership_ID', this.Membership_ID);
    params = params.append('Active',"false");
    return this.httpClient.get<any>(this.transaction_history_url, {params : params});
  }

  renewTransaction(transaction_id: string)
  {
    return this.httpClient.post<any>(this.transaction_renew_url, {Transaction_ID : transaction_id}, {
      observe: 'response'
    });
  }



}
