import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs'
import { debounceTime } from 'rxjs/operators'

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
  public data: any = [];
  subject :Subject<any> = new Subject()

  constructor() { }
  
  ngOnInit() {
    this.subject
    .pipe(debounceTime(500))
    .subscribe(() => {this.getSearchResults()})
  }

  onKeyUp()
  {
    console.log("Key up")
    this.subject.next()
  }

  getSearchResults() {
    return fetch(`${this.url}?Title=${this.inputparam}`)
      .then(res => res.json())
      .then(res => {
        if (res['msg'] === 'Success') {
          this.data = res['data'];
          this.error = false;
          this.result = true;
          var ele1 = document.getElementsByClassName('true');
          if (ele1.length > 0) {
            for (var i = 0; i < ele1.length; i++) {
              ele1[i].textContent = 'Available';
            }
          }
          var ele2 = document.getElementsByClassName('false');
          if (ele2.length > 0) {
            for (var i = 0; i < ele1.length; i++) {
              ele2[i].textContent = 'Unavailable';
            }
          }
        }
      }).catch(err => {
        this.error = true;
        this.result = false;
        this.inputparam = "";
      });

  }

}
