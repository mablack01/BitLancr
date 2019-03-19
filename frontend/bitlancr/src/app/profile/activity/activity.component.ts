import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'activity',
	templateUrl: './activity.component.html',
	styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

	@Input()
	userActivity = [
		{
			id: Number(),
			uid: Number(),
			cid: Number(),
			bidId: Number(),
			oid: Number(),
			description: String(),
			type: String(),
			date: String()
		}
	];

	constructor(private router: Router) { }

	ngOnInit() {
	}

	openAction(activity) {
		if (activity.action == "View Bid") {
			//view bid??
		} else if (activity.action == "View Contract") {
			//view contract??
		} else if (activity.action == "View Profile") {
			this.router.navigate(['/profile/id/' + activity.oid]);
		}
	}

}
