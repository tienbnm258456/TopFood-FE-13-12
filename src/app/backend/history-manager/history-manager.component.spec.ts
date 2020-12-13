import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryManagerComponent } from './history-manager.component';

describe('HistoryManagerComponent', () => {
  let component: HistoryManagerComponent;
  let fixture: ComponentFixture<HistoryManagerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryManagerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryManagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
