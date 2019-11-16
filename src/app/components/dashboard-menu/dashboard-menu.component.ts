import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-menu',
  templateUrl: './dashboard-menu.component.html',
  styleUrls: ['./dashboard-menu.component.css']
})
export class DashboardMenuComponent implements OnInit {

  show_dashboard : boolean = false
  show_membership_details : boolean = false
  show_transaction_history : boolean = false

  constructor() { }

  ngOnInit() {
  }

  showMenuOption(option){
    if(option == 'dashboard')
    {
      this.show_dashboard = true
      this.show_membership_details = false
      this.show_transaction_history = false
    }  
    else if(option == 'membership_details')
    {
      this.show_membership_details = true
      this.show_dashboard = false
      this.show_transaction_history = false
    }
    else if(option == 'transaction_history')
    {
      this.show_transaction_history = true
      this.show_membership_details = false
      this.show_dashboard = false
    }

  }

}
