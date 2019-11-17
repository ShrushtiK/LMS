import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';

@Component({
  selector: 'app-transaction-history-active',
  templateUrl: './transaction-history-active.component.html',
  styleUrls: ['./transaction-history-active.component.css']
})
export class TransactionHistoryActiveComponent implements OnInit {

  //all_transactions : [ {Title:string, Author:string, Due_Date:Date, Renew_Count:Number, Fine: Number} ] 
  active_transactions : any = []
  constructor(public transaction: TransactionService) {
    transaction.getActiveTransactions().subscribe(
      res => {
        this.active_transactions = res

      },
      err =>
      {
        console.log("Error")
      }
    )
   }

  ngOnInit() {
  }

  renewBook(transaction:any)
  {
    this.transaction.renewTransaction(transaction._id).subscribe(
      res => {
        transaction.Due_Date = res.body.data.Due_Date
        transaction.Renew_Count += 1
        alert("Successfully renewed")
      },
      err =>
      {
        alert(err.error)
      }
    )
  }

}
