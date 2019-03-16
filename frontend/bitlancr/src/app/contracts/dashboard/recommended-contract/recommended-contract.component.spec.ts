import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedContractComponent } from './recommended-contract.component';

describe('RecommendedContractComponent', () => {
	let component: RecommendedContractComponent;
	let fixture: ComponentFixture<RecommendedContractComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RecommendedContractComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RecommendedContractComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
