import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightsUpdateComponent } from './weights-update.component';

describe('WeightsUpdateComponent', () => {
  let component: WeightsUpdateComponent;
  let fixture: ComponentFixture<WeightsUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeightsUpdateComponent]
    });
    fixture = TestBed.createComponent(WeightsUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
