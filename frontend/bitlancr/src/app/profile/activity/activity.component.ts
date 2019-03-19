import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ClrDatagridComparatorInterface } from '@clr/angular';

class DateComparator implements ClrDatagridComparatorInterface<String> {
	compare(a: string, b: string) {
		console.log(Date.parse(a) - Date.parse(b));
		return Date.parse(a) - Date.parse(b);
	}
}

@Component({
	selector: 'activity',
	templateUrl: './activity.component.html',
	styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {

	dateSort = new DateComparator();

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
