import { Component, OnInit } from '@angular/core';
import { MemIdService } from '../../services/mem-id.service';
import { TransactionService } from '../../services/transaction.service';
import { RecommService } from '../../services/recomm.service';

@Component({
  selector: 'app-recommendations',
  templateUrl: './recommendations.component.html',
  styleUrls: ['./recommendations.component.css']
})
export class RecommendationsComponent implements OnInit {
  Mem_Id: string;
  no_books: boolean = false;
  all_ids = [];
  all_recom = [];
  recomm_details = [];
  p = 0;
  p1 = 0;
  data: any;
  constructor(public memId: MemIdService, public transaction: TransactionService, public recomm: RecommService) { }

  // recom_res(x) {
  //   let url = 'http://127.0.0.1:9000/book/recommendations?Book_ID=' + String(x);
  //   return fetch(url);
  // }
  ngOnInit() {
    this.memId.currMemId.subscribe(id => this.Mem_Id = id);
    this.transaction.getAllTransactions(this.Mem_Id).subscribe(
      res => {
        console.log(res);
        if (res.length == 0) {
          this.no_books = true;
        }
        else {
          if (res.length < 6) {
            for (var o = 0; o < res.length; o++) {
              console.log(res[o]);
              console.log('---');
              console.log(res[o]['Book_ID']);
              this.all_ids[o] = res[o]['Book_ID'];
              console.log('---');
              console.log(this.all_ids);
            }
          }
          else {
            for (var o = 0; o < 6; o++) {
              console.log(res[o]);
              console.log('---');
              console.log(res[o]['Book_ID']);
              this.all_ids[o] = res[o]['Book_ID'];
              console.log('---');
              console.log(this.all_ids);
            }
          }
          this.all_ids.forEach(id => {
            this.recomm.getRecommendations(id).subscribe(response => {
              console.log(response);
              for (var o = 0; o < response.length; o++) {
                this.all_recom[this.p] = response[o];
                this.p++;
              }
            });
          });
          console.log(this.all_recom);
          this.all_recom.forEach(id => {
            this.recomm.getRecommDetails(id).subscribe(resp => {
              console.log(resp);
              for (var o = 0; o < resp.length; o++) {
                this.recomm_details[this.p1] = resp[o];
                this.p1++;
              }
            });
          });
          this.data = this.recomm_details;
        }


        // this.recomm.getRecommendations(res).toPromise(
        //   res1 => {
        //     console.log(res1)
        //   }
        // )
        // var a = res.length();
        // if (a == 0) {
        //   this.no_books = true;
        // }
        // else {
        //   console.log('x');
        //   if (a < 6) {
        //     console.log('xx');
        //     for (var j = 0; j < res.length(); j++) {
        //       console.log('xxx');
        //       this.all_recom.push(this.recom_res(res[j]['Book_ID']))
        //     }
        //   }
        //   else {
        //     for (var j = 0; j < 6; j++) {
        //       this.all_recom.push(this.recom_res(res[j]['Book_ID']))
        //     }
        //   }
        //   console.log('------');
        //   console.log(this.all_recom);
        //   console.log('------');

        // }
      },
      err => {
        alert(err.error);
      }
    )
  }

}
