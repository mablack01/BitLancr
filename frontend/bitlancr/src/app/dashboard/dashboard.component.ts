import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	//We can find this out through a JWT session, hard coded for now.
	isDeveloper = false;

	constructor() { }

	ngOnInit() {
	}

}
