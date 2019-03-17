import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	//We can find this out through a JWT session, hard coded for now.
	isDeveloper = false;
	loaded = false;
	openBids = [];
	contractPostingIndex = 0;
	contractPostingLength = 0;
	contractPostings = [];
	currentContractIndex = 0;
	currentContractLength = 0;
	currentContracts = [];

	constructor() {
		if (this.isDeveloper) {
			this.loadOpenBids();
		} else {
			this.loadContractPostings();
		}
		this.loadCurrentContracts();
		/*This is to simulate the endpoints loading. Once we set up endpoints to
		* load actual data, we will use (request).then() to set loaded = true.
		*/
		var root = this;
		setTimeout(function() {
			root.loaded = true;
			console.log("Data loaded.");
		}, 3000);
	}

	ngOnInit() {
	}

	loadOpenBids() {
		//Insert http request to get current contracts.
		//Using mock data for now till the backend is setup.
		this.openBids[0] = {
			title: "Web App",
			yourBid: 5000,
			lowestBid: 4000,
			daysLeft: 5
		};
		this.openBids[1] = {
			title: "Java Program",
			yourBid: 25,
			lowestBid: 25,
			daysLeft: 2
		};
	}

	loadContractPostings() {
		//Insert http request to get current contracts.
		//Using mock data for now till the backend is setup.
		this.contractPostings[0] = {
			title: "Front End Dev",
			numBid: 23,
			avgBid: 54,
			lowestBid: 48,
			imgSrc: "assets/companies/company1.png"
		};
		this.contractPostings[1] = {
			title: "Back End Dev",
			numBid: 3,
			avgBid: 28,
			lowestBid: 26,
			imgSrc: "assets/companies/company1.png"
		};
		this.contractPostings[2] = {
			title: "Database Engineer",
			numBid: 14,
			avgBid: 52,
			lowestBid: 52,
			imgSrc: "assets/companies/company1.png"
		};
		this.contractPostingLength = this.contractPostings.length;
	}

	loadCurrentContracts() {
		//Insert http request to get current contracts.
		//Using mock data for now till the backend is setup.
		this.currentContracts[0] = {
			title: "Processor Work",
			nextSprint: "May 9, 2019",
			imgSrc: "assets/intel/job1.png"
		};
		this.currentContracts[1] = {
			title: "Java FX Interface",
			nextSprint: "April 20, 2019",
			imgSrc: "assets/oracle/logo.png"
		};
		this.currentContracts[2] = {
			title: "Some Other Job",
			nextSprint: "March 25, 2019",
			imgSrc: "assets/companies/bbb.png"
		};
		this.currentContractLength = this.currentContracts.length;
	}

	getContract(currentContracts: Boolean, item: Number) {
		if (item == 1) {
			if (currentContracts) {
				return this.currentContracts[this.currentContractIndex];
			} else {
				return this.contractPostings[this.contractPostingIndex];
			}
		} else {
			if (currentContracts) {
				let nextIndex = this.currentContractIndex + 1;
				if (nextIndex >= this.currentContractLength) {
					nextIndex = 0;
				}
				return this.currentContracts[nextIndex];
			} else {
				let nextIndex = this.contractPostingIndex + 1;
				if (nextIndex >= this.contractPostingLength) {
					nextIndex = 0;
				}
				return this.contractPostings[nextIndex];
			}
		}
	}

	decreaseIndex(currentContracts: Boolean) {
		if (currentContracts) {
			let nextIndex = this.currentContractIndex - 1;
			if (nextIndex < 0) {
				nextIndex = this.currentContractLength - 1;
			}
			this.currentContractIndex = nextIndex;
		} else {
			let nextIndex = this.contractPostingIndex - 1;
			if (nextIndex < 0) {
				nextIndex = this.contractPostingLength - 1;
			}
			this.contractPostingIndex = nextIndex;
		}
	}

	increaseIndex(currentContracts: Boolean) {
		if (currentContracts) {
			let nextIndex = this.currentContractIndex + 1;
			if (nextIndex >= this.currentContractLength) {
				nextIndex = 0;
			}
			this.currentContractIndex = nextIndex;
		} else {
			let nextIndex = this.contractPostingIndex + 1;
			if (nextIndex >= this.contractPostingLength) {
				nextIndex = 0;
			}
			this.contractPostingIndex = nextIndex;
		}
	}

}
