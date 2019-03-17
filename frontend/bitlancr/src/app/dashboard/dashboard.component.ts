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

	constructor() { }

	ngOnInit() {
	}

	setContractAmount(event) {
		this.contractLength = event;
	}

	getContract(item: Number) {
		if (item == 1) {
			return this.contractIndex;
		} else {
			let nextIndex = this.contractIndex + 1;
			if (nextIndex >= this.contractLength) {
				nextIndex = 0;
			}
			return nextIndex;
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
