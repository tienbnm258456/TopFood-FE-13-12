import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderByYearComponent } from './order-by-year.component';

describe('OrderByYearComponent', () => {
  let component: OrderByYearComponent;
  let fixture: ComponentFixture<OrderByYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderByYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderByYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
