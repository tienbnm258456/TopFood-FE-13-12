import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersByWeekComponent } from './orders-by-week.component';

describe('OrdersByWeekComponent', () => {
  let component: OrdersByWeekComponent;
  let fixture: ComponentFixture<OrdersByWeekComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrdersByWeekComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersByWeekComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
