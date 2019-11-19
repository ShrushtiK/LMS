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
  modal_title: string;
  modal_message: any;

  constructor(public transaction: TransactionService, public memId: MemIdService) {
    this.memId.currMemId.subscribe(id => this.Mem_Id = id);
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

  }

  renewBook(transaction: any) {
    this.transaction.renewTransaction(transaction._id).subscribe(
      res => {
        transaction.Due_Date = res.body.data.Due_Date
        transaction.Renew_Count += 1
        this.modal_title = "Success!"
        this.modal_message = "Your book has been renewed successfully."
        $("#exampleModal").modal('show')
        //alert("Successfully renewed")
      },
      err => {
        this.modal_title = "Sorry!"
        this.modal_message = err.error.data;
        $("#exampleModal").modal('show')
        //alert(err.error.data)
      }
    )
  }

}
