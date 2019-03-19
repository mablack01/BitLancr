import { Component, OnInit, Input } from '@angular/core';

@Component({
	selector: 'contract-preview',
	templateUrl: './preview.component.html',
	styleUrls: ['./preview.component.css', '../../../dashboard/dashboard.component.css']
})
export class ContractPreviewComponent implements OnInit {

	@Input() contract = {
		title: String,
		nextSprint: String,
		imgSrc: String
	};
	mockData = [];

	constructor() {
	}

	ngOnInit() {
	}

}
