import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'contract-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css',  '../../../dashboard/dashboard.component.css']
})
export class ContractPreviewComponent implements OnInit {

  @Input() id = Number;
  mockData = [];

  constructor() {
    this.mockData[1] = {
      title: "Processor Work",
      nextSprint: "May 9, 2019",
      imgSrc: "assets/intel/job1.png"
    };
    this.mockData[2] = {
      title: "Java FX Interface",
      nextSprint: "April 20, 2019",
      imgSrc: "assets/oracle/logo.png"
    };
  }

  ngOnInit() {
  }

}
