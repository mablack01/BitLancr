import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecomendedDeveloperComponent } from './recomended-developer.component';

describe('RecomendedDeveloperComponent', () => {
  let component: RecomendedDeveloperComponent;
  let fixture: ComponentFixture<RecomendedDeveloperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecomendedDeveloperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecomendedDeveloperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
