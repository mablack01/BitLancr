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
		ActivityComponent
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
