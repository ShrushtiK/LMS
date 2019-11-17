import { Component, OnInit } from '@angular/core';
import { TransactionService } from '../../services/transaction.service';
import { MemIdService } from '../../services/mem-id.service';


@Component({
  selector: 'app-transaction-history-all',
  templateUrl: './transaction-history-all.component.html',
  styleUrls: ['./transaction-history-all.component.css']
})
export class TransactionHistoryAllComponent implements OnInit {
  Mem_Id: string;
  show_all_transactions: boolean = false
  //all_transactions : [ {Title:string, Author:string, Due_Date:Date, Renew_Count:Number, Fine: Number} ] 
  all_transactions: any = []

  constructor(public transaction: TransactionService, public memId: MemIdService) {
    this.show_all_transactions = true;
    this.memId.currMemId.subscribe(id => this.Mem_Id = id);
    transaction.getAllTransactions(this.Mem_Id).subscribe(
      res => {
        this.all_transactions = res
      },
      err => {
        alert(err.error)
      }
    )
  }

  ngOnInit() {

  }

  showAllTransactions() {

  }

}
