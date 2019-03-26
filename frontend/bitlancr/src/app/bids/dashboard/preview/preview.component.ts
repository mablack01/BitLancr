import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'bid-preview',
	templateUrl: './preview.component.html',
	styleUrls: ['./preview.component.css', '../../../dashboard/dashboard.component.css']
})
export class BidPreviewComponent implements OnInit {

	@Input() bid = {
		title: String,
		yourBid: Number,
		lowestBid: Number,
		daysLeft: Number
	};

	constructor() {
	}

	ngOnInit() {
	}

	cancel() {
		alert("You have canceled bid " + this.bid.title + ".");

	}

	modify() {
		console.log('ayooo');
		alert("You have modified bid " + this.bid.title + ".");
		console.log('and again');
	}

	formatMoney(n: Number) {
		return "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

}
