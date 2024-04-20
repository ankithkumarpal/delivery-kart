import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UPXMethodComponent } from './upxmethod.component';

describe('UPXMethodComponent', () => {
  let component: UPXMethodComponent;
  let fixture: ComponentFixture<UPXMethodComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UPXMethodComponent]
    });
    fixture = TestBed.createComponent(UPXMethodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
