import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SellersUpdateComponent } from './sellers-update.component';

describe('SellersUpdateComponent', () => {
  let component: SellersUpdateComponent;
  let fixture: ComponentFixture<SellersUpdateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SellersUpdateComponent]
    });
    fixture = TestBed.createComponent(SellersUpdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
