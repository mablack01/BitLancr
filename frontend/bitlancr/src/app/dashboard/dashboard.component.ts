import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-dashboard',
	templateUrl: './dashboard.component.html',
	styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

	//We can find this out through a JWT session, hard coded for now.
	isDeveloper = false;
	contractIndex = 0;
	contractLength = 0;
	currentContracts = [];

	constructor() {
		this.loadCurrentContracts();
	}

	ngOnInit() {
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
		this.contractLength = this.currentContracts.length;
	}

	getContract(item: Number) {
		if (item == 1) {
			return this.currentContracts[this.contractIndex];
		} else {
			let nextIndex = this.contractIndex + 1;
			if (nextIndex >= this.contractLength) {
				nextIndex = 0;
			}
			return this.currentContracts[nextIndex];
		}
	}

	decreaseIndex() {
		let nextIndex = this.contractIndex - 1;
		if (nextIndex < 0) {
			nextIndex = this.contractLength - 1;
		}
		this.contractIndex = nextIndex;
	}

	increaseIndex() {
		let nextIndex = this.contractIndex + 1;
		if (nextIndex >= this.contractLength) {
			nextIndex = 0;
		}
		this.contractIndex = nextIndex;
	}

}
