import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-title-available',
  templateUrl: './book-title-available.component.html',
  styleUrls: ['./book-title-available.component.css']
})
export class BookTitleAvailableComponent implements OnInit {
  public inputparam: string = "";
  public url = "http://127.0.0.1:9000/book/searchByTitle";
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
          this.error = false;
          this.result = true;
        }
      });

  }

}
