import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'profile-card',
	templateUrl: './profile-card.component.html',
	styleUrls: ['./profile-card.component.css']
})
export class ProfileCardComponent implements OnInit {

	@Input() userData = {
		id: Number(),
		fname: String(),
		lname: String(),
		email: String(),
		handle: String(),
		role: String(),
		skills: [],
		bio: String(),
		website: String(),
		profilePic: String(),
		organization: String(),
		status: String()
	};

	constructor() { }

	ngOnInit() {
	}

	getName() {
		//If a user is a business, use organization name.
		let role = this.userData.role;
		if (role == "biz") {
			return this.userData.organization;
		}
		//Otherwise, use full name for 'people' such as devs, admins, etc.
		return this.userData.fname + " " + this.userData.lname;
	}

}
