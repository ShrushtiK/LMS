import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-author-available',
  templateUrl: './book-author-available.component.html',
  styleUrls: ['./book-author-available.component.css']
})
export class BookAuthorAvailableComponent implements OnInit {
  public inputparam: string = "";
  public url = "http://127.0.0.1:9000/book/searchByAuthor";
  public error: boolean = false;
  public result: boolean = false;
  public data: any = [];
  constructor() { }

  ngOnInit() {
  }
  getSearchResults() {
    return fetch(`${this.url}?Author=${this.inputparam}`)
      .then(res => res.json())
      .then(res => {
        if (res['msg'] === 'Success') {
          console.log(res['data']);
          this.data = res['data'];
          console.log('--------')
          console.log(this.data);

          this.result = true;
          this.error = false;
          // var ele1 = document.getElementsByClassName('true');
          // if (ele1.length > 0) {
          //   for (var i = 0; i < ele1.length; i++) {
          //     ele1[i].textContent = 'Available';
          //   }
          // }
          // var ele2 = document.getElementsByClassName('false');
          // if (ele2.length > 0) {
          //   for (var i = 0; i < ele1.length; i++) {
          //     ele2[i].textContent = 'Unavailable';
          //   }
          // }
        }
      }).catch(err => {
        this.error = true;
        this.result = false;
        this.inputparam = "";
      });

  }

}
