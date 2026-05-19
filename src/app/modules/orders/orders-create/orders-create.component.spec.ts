import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersCreateComponent } from './orders-create.component';

describe('OrdersCreateComponent', () => {
  let component: OrdersCreateComponent;
  let fixture: ComponentFixture<OrdersCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrdersCreateComponent]
    });
    fixture = TestBed.createComponent(OrdersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
