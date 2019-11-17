import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {

  by_author: boolean = false;
  by_title: boolean = false;
  details: boolean = false;
  all_trans: boolean = false;
  active_trans: boolean = false;
  bleh_home: boolean = false;
  sugg: boolean = false;
  constructor() { }

  ngOnInit() {
    this.bleh_home = true;
  }

  showMenuOption(option) {
    if (option === 'by_author') {
      this.by_author = true;
      this.by_title = false;
      this.details = false;
      this.all_trans = false;
      this.active_trans = false;
      this.bleh_home = false;
      this.sugg = false;
    }
    if (option === 'by_title') {
      this.by_author = false;
      this.by_title = true;
      this.details = false;
      this.all_trans = false;
      this.active_trans = false;
      this.bleh_home = false;
      this.sugg = false;
    }
    if (option === 'details') {
      this.by_author = false;
      this.by_title = false;
      this.details = true;
      this.all_trans = false;
      this.active_trans = false;
      this.bleh_home = false;
      this.sugg = false;
    }

    if (option === 'all_trans') {
      this.by_author = false;
      this.by_title = false;
      this.details = false;
      this.all_trans = true;
      this.active_trans = false;
      this.bleh_home = false;
      this.sugg = false;
    }
    if (option === 'active_trans') {
      this.by_author = false;
      this.by_title = false;
      this.details = false;
      this.all_trans = false;
      this.active_trans = true;
      this.bleh_home = false;
      this.sugg = false;
    }
    if (option === 'sugg') {
      this.by_author = false;
      this.by_title = false;
      this.details = false;
      this.all_trans = false;
      this.active_trans = false;
      this.bleh_home = false;
      this.sugg = true;
    }








  }

}


