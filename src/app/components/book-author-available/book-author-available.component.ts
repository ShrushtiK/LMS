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
  public data: any = {};
  constructor() { }

  ngOnInit() {
  }
  getSearchResults() {
    return fetch(`${this.url}?Title=${this.inputparam}`)
      .then(res => res.json())
      .then(res => {
        if (res['msg'] != 'success') {
          this.error = true;
          this.result = false;
        }
        else {
          this.data = res['data'];
          let ele1 = document.getElementsByClassName('true');
          let ele2 = document.getElementsByClassName('false');
          // for(var i=0;i<ele1.length;i++){
          //   ele1[i].style.color='red';

          // }
          this.error = false;
          this.result = true;
        }
      });

  }

}
