import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContractBidComponent } from './contract-bid.component';

describe('ContractBidComponent', () => {
  let component: ContractBidComponent;
  let fixture: ComponentFixture<ContractBidComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContractBidComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContractBidComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
