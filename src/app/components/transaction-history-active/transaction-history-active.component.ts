import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { MemIdService } from '../../services/mem-id.service';

@Component({
  selector: 'app-transaction-history-active',
  templateUrl: './transaction-history-active.component.html',
  styleUrls: ['./transaction-history-active.component.css']
})
export class TransactionHistoryActiveComponent implements OnInit {
  Mem_Id: string;
  //all_transactions : [ {Title:string, Author:string, Due_Date:Date, Renew_Count:Number, Fine: Number} ] 
  active_transactions: any = []
  constructor(public transaction: TransactionService, public memId: MemIdService) {
    transaction.getActiveTransactions(this.Mem_Id).subscribe(
      res => {
        this.active_transactions = res

      },
      err => {
        console.log("Error")
      }
    )
  }

  ngOnInit() {
    this.memId.currMemId.subscribe(id => this.Mem_Id = id);
  }

  renewBook(transaction: any) {
    this.transaction.renewTransaction(transaction._id).subscribe(
      res => {
        transaction.Due_Date = res.body.data.Due_Date
        transaction.Renew_Count += 1
        alert("Successfully renewed")
      },
      err => {
        alert(err.error)
      }
    )
  }

}
