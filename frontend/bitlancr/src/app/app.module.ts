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
import { RecommendedContractComponent } from './contracts/dashboard/recommended-contract/recommended-contract.component';
import { RecommendedDeveloperComponent } from './developers/dashboard/recommended-developer/recommended-developer.component';
import { PostingComponent } from './contracts/dashboard/posting/posting.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileCardComponent } from './profile/profile-card/profile-card.component';
import { ActivityComponent } from './profile/activity/activity.component';
import { ContractComponent } from './contracts/contract.component';
import { ContractBidComponent } from './contracts/contract-bid/contract-bid.component';
import { ErrorComponent } from './global/error/error.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule } from '@angular/forms';

@NgModule({
	declarations: [
		AppComponent,
		NavBarComponent,
		BidPreviewComponent,
		DashboardComponent,
		ContractPreviewComponent,
		RecommendedContractComponent,
		RecommendedDeveloperComponent,
		PostingComponent,
		ProfileComponent,
		ProfileCardComponent,
		ActivityComponent,
		ContractComponent,
		ContractBidComponent,
		ErrorComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		ClarityModule,
		BrowserAnimationsModule,
		PdfViewerModule,
		FormsModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }
