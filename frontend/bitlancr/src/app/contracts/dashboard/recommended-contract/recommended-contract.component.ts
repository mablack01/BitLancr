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
			skills: ["angular", "javascript", "html", "css"],
			avgBid: 35
		},
			this.mockData[1] = {
				title: "UX Design",
				imgUrl: "assets/oracle/logo.png",
				skills: ["angular", "javascript", "html", "css"],
				avgBid: 35
			},
			this.mockData[2] = {
				title: "UX Design",
				imgUrl: "assets/oracle/logo.png",
				skills: ["angular", "javascript", "html", "css"],
				avgBid: 35
			},
			this.mockData[3] = {
				title: "UX Design",
				imgUrl: "assets/oracle/logo.png",
				skills: ["angular", "javascript", "html", "css"],
				avgBid: 35
			},
			this.mockData[4] = {
				title: "UX Design",
				imgUrl: "assets/oracle/logo.png",
				skills: ["angular", "javascript", "html", "css"],
				avgBid: 35
			},
			this.mockData[5] = {
				title: "UX Design",
				imgUrl: "assets/oracle/logo.png",
				skills: ["angular", "javascript", "html", "css"],
				avgBid: 35
			}
		this.renderColumns();
	}

	ngOnInit() {
	}

	renderColumns() {
		for (let i = 0; i < this.mockData.length; i += 4) {
			this.contracts.push({ data: this.mockData.slice(i, i + 4) });
		}
	}

}
