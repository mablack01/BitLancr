import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'contract-posting',
	templateUrl: './posting.component.html',
	styleUrls: ['./posting.component.css', '../../../dashboard/dashboard.component.css']
})
export class PostingComponent implements OnInit {

	@Input() contract = {
		title: String,
		numBid: Number,
		avgBid: Number,
		lowestBid: Number,
		imgSrc: String
	};

	constructor() { }

	ngOnInit() {
	}

	formatMoney(n: Number) {
		return "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

}
