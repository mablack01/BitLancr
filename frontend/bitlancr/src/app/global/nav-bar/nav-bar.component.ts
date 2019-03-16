import { Component, OnInit, HostListener } from '@angular/core';

@Component({
	selector: 'nav-bar',
	templateUrl: './nav-bar.component.html',
	styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

	isMobile: boolean = false;

	constructor() { }

	ngOnInit() {
		this.adjustScreenSize();
	}

	@HostListener('window:resize', ['$event'])
	onResize(event) {
		this.adjustScreenSize();
	}

	adjustScreenSize() {
		if (window.screen.width <= 768) { // phones/tablets
			this.isMobile = true;
		} else {
			this.isMobile = false;
		}
	}

}
