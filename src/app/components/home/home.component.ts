import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public show_log: boolean = true;
  public show_reg: boolean = false;

  constructor() { }

  ngOnInit() {
  }
  showOption(name) {
    if (name === 'register') {
      this.show_log = false;
      this.show_reg = true;
      var ele = document.getElementById('tab1');
      ele.classList.remove('active');
      var ele1 = document.getElementById('tab2');
      ele1.classList.add('active');
    }
    if (name === 'login') {
      this.show_log = true;
      this.show_reg = false;
      var ele = document.getElementById('tab2');
      ele.classList.remove('active');
      var ele1 = document.getElementById('tab1');
      ele1.classList.add('active');
    }

  }

}

