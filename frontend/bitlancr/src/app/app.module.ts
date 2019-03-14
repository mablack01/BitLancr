import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClarityModule } from '@clr/angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavBarComponent } from './global/nav-bar/nav-bar.component';
import { BidPreviewComponent } from './bids/dashboard/preview/preview.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContractPreviewComponent } from './contracts/dashboard/preview/preview.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BidPreviewComponent,
    DashboardComponent,
    ContractPreviewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
