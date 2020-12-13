import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersByDayComponent } from './orders-by-day.component';

describe('OrdersByDayComponent', () => {
  let component: OrdersByDayComponent;
  let fixture: ComponentFixture<OrdersByDayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersByDayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
