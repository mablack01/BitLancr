import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
	selector: 'contract',
	templateUrl: './contract.component.html',
	styleUrls: ['./contract.component.css', './../app.component.css']
})
export class ContractComponent implements OnInit {

	id: string;
	loaded = true;
	mockData = [];
	contractData = {};

	constructor(private route: ActivatedRoute) {
		this.loadContractData();
		//Loading Endpoints
		var root = this;
		setTimeout(function() {
			root.loaded = true;
			console.log("Data loaded.");
		}, 3000);
	}

	ngOnInit() {
		this.id = this.route.snapshot.paramMap.get('id');
		for (let contract of this.mockData) {
			if (contract.id == this.id) {
				this.contractData = contract;
			}
		}
	}

	loadContractData() {
		this.mockData[0] = {
			id: 1,
			did: 4,
			bizid: 1,
			avgbid: 50,
			lowbid: 42,
			numbids: 14,
			postdate: "03/01/19",
			startdate: "03/21/19",
			skills: ["html", "css"],
			charter: "",
			nextSprintDate: "04/15/19",
			open: false,
			trello: "",
			git: "",
			desc: "We need a wireframe design for our new dashboard.",
			title: "Create Wireframe"
		};
		this.mockData[1] = {
			id: 2,
			did: null,
			bizid: 2,
			avgbid: 38,
			lowbid: 30,
			numbids: 5,
			postdate: "03/18/19",
			startdate: "",
			skills: ["flask", "sql"],
			charter: "",
			nextSprintDate: "04/15/19",
			open: true,
			trello: "",
			git: "",
			desc: "Paul needs someone to do the backend cause he is lazy.",
			title: "Backend Setup"
		};
	}

}
