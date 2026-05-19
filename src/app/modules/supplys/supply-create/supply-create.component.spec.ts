import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplyCreateComponent } from './supply-create.component';

describe('SupplyCreateComponent', () => {
  let component: SupplyCreateComponent;
  let fixture: ComponentFixture<SupplyCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SupplyCreateComponent]
    });
    fixture = TestBed.createComponent(SupplyCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
