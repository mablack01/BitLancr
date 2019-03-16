import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'recommended-contract',
	templateUrl: './recommended-contract.component.html',
	styleUrls: ['./recommended-contract.component.css', '../../../dashboard/dashboard.component.css']
})
export class RecommendedContractComponent implements OnInit {

	mockData = [];
	contracts = [];

	constructor() {
		this.mockData[0] = {
			title: "UX Design",
			imgUrl: "assets/oracle/logo.png",
			skills: ["angular", "bootstrap"],
			avgBid: 3500
		},
			this.mockData[1] = {
				title: "Webapp Design",
				imgUrl: "assets/companies/company1.png",
				skills: ["react", "material"],
				avgBid: 420
			},
			this.mockData[2] = {
				title: "Simple Application",
				imgUrl: "assets/intel/job1.png",
				skills: ["java"],
				avgBid: 69
			},
			this.mockData[3] = {
				title: "Grid Layout",
				imgUrl: "assets/companies/company3.png",
				skills: ["html"],
				avgBid: 710
			},
			this.mockData[4] = {
				title: "Endpoint Creation",
				imgUrl: "assets/companies/company5.png",
				skills: ["flask"],
				avgBid: 21
			},
			this.mockData[5] = {
				title: "Database Modeling",
				imgUrl: "assets/companies/company4.png",
				skills: ["sql"],
				avgBid: 12345
			}
		this.renderColumns();
	}

	ngOnInit() {
	}

	//Maybe we should set a maximum amount of recommendations returned so the page doesn't render forever?
	renderColumns() {
		for (let i = 0; i < this.mockData.length; i += 4) {
			this.contracts.push({ data: this.mockData.slice(i, i + 4) });
		}
	}

	formatMoney(n: Number) {
		return "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

}
