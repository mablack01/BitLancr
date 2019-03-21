import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'contract-bid',
	templateUrl: './contract-bid.component.html',
	styleUrls: ['./contract-bid.component.css', './../../app.component.css']
})
export class ContractBidComponent implements OnInit {

	@Input() contract = {
		id: Number(),
		did: Number(),
		bizid: Number(),
		avgbid: Number(),
		lowbid: Number(),
		numbids: Number(),
		postdate: String(),
		startdate: String(),
		skills: [],
		open: Boolean(),
		desc: String(),
		title: String(),
		organization: String(),
		imgUrl: String()
	};

	@Input() bids = [{
		fname: String(),
		lname: String(),
		bidValue: Number(),
		date: String()
	}];

	pageIndex = 1;

	constructor() { }

	ngOnInit() {
	}

	formatMoney(n: Number) {
		return "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

	getBids() {
		//let newBids = this.bids.slice(((this.pagination.currentPage - 1) * this.pagination.pageSize) + this.pagination.firstItem);
		return this.bids;
	}

}
