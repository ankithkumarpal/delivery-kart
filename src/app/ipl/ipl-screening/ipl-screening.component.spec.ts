import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IplScreeningComponent } from './ipl-screening.component';

describe('IplScreeningComponent', () => {
  let component: IplScreeningComponent;
  let fixture: ComponentFixture<IplScreeningComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IplScreeningComponent]
    });
    fixture = TestBed.createComponent(IplScreeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
