import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersCreateComponent } from './sellers-create.component';

describe('SellersCreateComponent', () => {
  let component: SellersCreateComponent;
  let fixture: ComponentFixture<SellersCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellersCreateComponent]
    });
    fixture = TestBed.createComponent(SellersCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
