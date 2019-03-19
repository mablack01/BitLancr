import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
	{ path: '', component: DashboardComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'dash', component: DashboardComponent },
	{ path: 'home', component: DashboardComponent },
	{ path: 'profile', component: ProfileComponent },
	{ path: 'profile/:handle', component: ProfileComponent },
	{ path: '**', component: DashboardComponent } //later we can add a 404
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }
