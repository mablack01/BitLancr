import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'contract-bid',
	templateUrl: './contract-bid.component.html',
	styleUrls: ['./contract-bid.component.css']
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
		charter: String(),
		nextSprintDate: String(),
		open: Boolean(),
		trello: String(),
		git: String(),
		desc: String(),
		title: String()
	};

	constructor() { }

	ngOnInit() {
	}

}
