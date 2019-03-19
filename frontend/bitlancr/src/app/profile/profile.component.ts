import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'profile',
	templateUrl: './profile.component.html',
	styleUrls: ['./profile.component.css', './../app.component.css']
})
export class ProfileComponent implements OnInit {

	loaded = false;
	handle: String;
	userData: [];

	constructor(private route: ActivatedRoute) { }

	ngOnInit() {
		this.handle = this.route.snapshot.paramMap.get('handle');
		if (this.handle != null) {
			//This code simulates we got a handle, load the user.
		} else {
			//This code simulates no handle was provided, show logged in user.
		}
		//Gather user data from endpoint using handle, if exists.
		//Simulating an end point here.
		var root = this;
		setTimeout(function() {
			root.loaded = true;
			console.log("Data loaded.");
		}, 3000);
	}

}
