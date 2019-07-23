import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCardPaymentComponent } from './add-card-payment.component';

describe('AddCardPaymentComponent', () => {
  let component: AddCardPaymentComponent;
  let fixture: ComponentFixture<AddCardPaymentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCardPaymentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCardPaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
