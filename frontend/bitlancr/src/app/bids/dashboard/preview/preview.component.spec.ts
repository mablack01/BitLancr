import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BidPreviewComponent } from './preview.component';

describe('BidPreviewComponent', () => {
  let component: BidPreviewComponent;
  let fixture: ComponentFixture<BidPreviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BidPreviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BidPreviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
