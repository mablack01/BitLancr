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
      yourBid: 5000,
      lowestBid: 4000,
      daysLeft: 5
    };
    this.mockData[2] = {
      title: "Java Program",
      yourBid: 25,
      lowestBid: 25,
      daysLeft: 2
    };
  }

  ngOnInit() {
  }

  cancel() {
    alert("You have canceled bid " + this.id + ".");
  }

  modify() {
    alert("You have modified bid " + this.id + ".");
  }

  formatMoney(n) {
    return "$" + n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }

}
