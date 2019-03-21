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
	bids = [];
	contractData = {};

	constructor(private route: ActivatedRoute) {
		this.loadContractData();
		this.loadContractBids();
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
			title: "Create Wireframe",
			organization: "Oracle",
			imgUrl: "assets/oracle/oracle.png"
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
			desc: "Paul needs someone to do the backend cause he is lazy. Place holder, place holder, place holder, place holder, place holder, place holder, place holder, place holder, place holder, place holder, place holder, place holder, place holder",
			title: "Backend Setup",
			organization: "Intel",
			imgUrl: "assets/intel/job1.png"
		};
	}

	loadContractBids() {
		//Get the bids corresponding to the contract.
		this.bids[0] = {
			fname: "Miles",
			lname: "Black",
			bidValue: 42,
			date: "March 18, 2019",
		};
		this.bids[1] = {
			fname: "Bob",
			lname: "Billing",
			bidValue: 41,
			date: "March 18, 2019",
		};
		this.bids[2] = {
			fname: "Miles",
			lname: "Black",
			bidValue: 40,
			date: "March 19, 2019",
		};
		this.bids[3] = {
			fname: "Billy",
			lname: "Mays",
			bidValue: 38,
			date: "March 19, 2019",
		};
		this.bids[4] = {
			fname: "Miles",
			lname: "Black",
			bidValue: 37,
			date: "March 20, 2019",
		};
		this.bids[5] = {
			fname: "Paul",
			lname: "Mikulskis",
			bidValue: 35,
			date: "March 21, 2019",
		};
		this.bids[6] = {
			fname: "Alex",
			lname: "Bergeron",
			bidValue: 32,
			date: "March 21, 2019",
		};
	}

}
