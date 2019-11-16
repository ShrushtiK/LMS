import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatInputModule, MatPaginatorModule,
  MatSliderModule, MatTableModule, MatStepperModule, MatDialogModule
} from '@angular/material';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomeLoginComponent } from './components/home-login/home-login.component';
import { HomeRegisterComponent } from './components/home-register/home-register.component';
import { DashboardMenuComponent } from './components/dashboard-menu/dashboard-menu.component';
import { TransactionHistoryAllComponent } from './components/transaction-history-all/transaction-history-all.component';
import { TransactionHistoryActiveComponent } from './components/transaction-history-active/transaction-history-active.component';
import { RenewMembershipComponent } from './components/renew-membership/renew-membership.component';
import { CancelMembershipComponent } from './components/cancel-membership/cancel-membership.component';
import { GetMembershipDetailsComponent } from './components/get-membership-details/get-membership-details.component';
import { BookTitleAvailableComponent } from './components/book-title-available/book-title-available.component';
import { BookAuthorAvailableComponent } from './components/book-author-available/book-author-available.component';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HomeLoginComponent,
    HomeRegisterComponent,
    DashboardMenuComponent,
    TransactionHistoryAllComponent,
    TransactionHistoryActiveComponent,
    RenewMembershipComponent,
    CancelMembershipComponent,
    GetMembershipDetailsComponent,
    BookTitleAvailableComponent,
    BookAuthorAvailableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatStepperModule,
    MatInputModule,
    MatPaginatorModule,
    MatSliderModule,
    MatTableModule,
    MatDialogModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
