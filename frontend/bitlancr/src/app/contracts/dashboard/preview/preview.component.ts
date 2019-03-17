import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'contract-preview',
	templateUrl: './preview.component.html',
	styleUrls: ['./preview.component.css', '../../../dashboard/dashboard.component.css']
})
export class ContractPreviewComponent implements OnInit {

	@Input() id = Number;
	@Output() contractAmount: EventEmitter<Number> = new EventEmitter<Number>();
	mockData = [];

	constructor() {
		this.mockData[0] = {
			title: "Processor Work",
			nextSprint: "May 9, 2019",
			imgSrc: "assets/intel/job1.png"
		};
		this.mockData[1] = {
			title: "Java FX Interface",
			nextSprint: "April 20, 2019",
			imgSrc: "assets/oracle/logo.png"
		};
		this.mockData[2] = {
			title: "Some Other Job",
			nextSprint: "March 25, 2019",
			imgSrc: "assets/companies/bbb.png"
		};
		//We will let the parent components know how many contracts were loaded.
		let length = this.mockData.length;
		let contractEvent = this.contractAmount;
		//Later we can replace this with (http get request).then(() => contractEvent.emit(length))
		setTimeout(function() {
			contractEvent.emit(length);
		}, 1000);
	}

	ngOnInit() {
	}

}
