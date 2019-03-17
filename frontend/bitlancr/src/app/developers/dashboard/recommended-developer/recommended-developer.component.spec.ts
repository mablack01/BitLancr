import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecommendedDeveloperComponent } from './recommended-developer.component';

describe('RecommendedDeveloperComponent', () => {
	let component: RecommendedDeveloperComponent;
	let fixture: ComponentFixture<RecommendedDeveloperComponent>;

	beforeEach(async(() => {
		TestBed.configureTestingModule({
			declarations: [RecommendedDeveloperComponent]
		})
			.compileComponents();
	}));

	beforeEach(() => {
		fixture = TestBed.createComponent(RecommendedDeveloperComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
