import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeliveryMainComponent } from './delivery-main.component';

describe('DeliveryMainComponent', () => {
  let component: DeliveryMainComponent;
  let fixture: ComponentFixture<DeliveryMainComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DeliveryMainComponent]
    });
    fixture = TestBed.createComponent(DeliveryMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
