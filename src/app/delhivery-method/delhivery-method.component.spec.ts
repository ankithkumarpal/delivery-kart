import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DelhiveryMethodComponent } from './delhivery-method.component';

describe('DelhiveryMethodComponent', () => {
  let component: DelhiveryMethodComponent;
  let fixture: ComponentFixture<DelhiveryMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DelhiveryMethodComponent]
    });
    fixture = TestBed.createComponent(DelhiveryMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
