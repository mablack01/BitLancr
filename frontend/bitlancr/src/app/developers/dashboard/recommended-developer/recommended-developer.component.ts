import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'recommended-developer',
	templateUrl: './recommended-developer.component.html',
	styleUrls: ['./recommended-developer.component.css', '../../../dashboard/dashboard.component.css']
})
export class RecommendedDeveloperComponent implements OnInit {

	mockData = [];
	developers = [];

	constructor() {
		this.mockData[0] = {
			name: "Dick Tate",
			imgUrl: "assets/people/person1.png",
			skills: ["bootstrap", "html", "material"],
			avgPay: 60
		};
		this.mockData[1] = {
			name: "Levy Tate",
			imgUrl: "assets/people/person2.png",
			skills: ["react", "html"],
			avgPay: 9
		};
		this.mockData[2] = {
			name: "Felix Cited",
			imgUrl: "assets/people/person3.png",
			skills: ["sql", "java"],
			avgPay: 69
		};
		this.mockData[3] = {
			name: "Bill Gates",
			imgUrl: "assets/people/person6.png",
			skills: ["flask", "angular", "sql"],
			avgPay: 1500000
		};
		this.mockData[4] = {
			name: "Doris Shutt",
			imgUrl: "assets/people/person5.png",
			skills: ["react", "angular", "html", "bootstrap"],
			avgPay: 74756
		};
		this.mockData[5] = {
			name: "Lee Vitoff",
			imgUrl: "assets/people/person4.png",
			skills: ["java"],
			avgPay: 420
		};
		this.renderColumns();
	}

	ngOnInit() {
	}

	//Maybe we should set a maximum amount of recommendations returned so the page doesn't render forever?
	renderColumns() {
		for (let i = 0; i < this.mockData.length; i += 4) {
			this.developers.push({ data: this.mockData.slice(i, i + 4) });
		}
	}

	formatMoney(n: Number) {
		return "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
	}

}
