import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'bid-preview',
  templateUrl: './preview.component.html',
  styleUrls: ['./preview.component.css', '../../../dashboard/dashboard.component.css']
})
export class BidPreviewComponent implements OnInit {

  @Input() id = Number;
  mockData = [];

  constructor() {
    this.mockData[1] = {
      title: "Web App",
      yourBid: 500,
      lowestBid: 400
    };
    this.mockData[2] = {
      title: "Java Program",
      yourBid: 25,
      lowestBid: 25
    };
  }

  ngOnInit() {
  }

}
