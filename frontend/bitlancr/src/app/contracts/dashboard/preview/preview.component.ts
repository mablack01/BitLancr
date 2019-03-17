import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'contract-preview',
	templateUrl: './preview.component.html',
	styleUrls: ['./preview.component.css', '../../../dashboard/dashboard.component.css']
})
export class ContractPreviewComponent implements OnInit {

	@Input() contract = {};
	mockData = [];

	constructor() {
	}

	ngOnInit() {
	}

}
