import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryDetailAdminComponent } from './history-detail-admin.component';

describe('HistoryDetailAdminComponent', () => {
  let component: HistoryDetailAdminComponent;
  let fixture: ComponentFixture<HistoryDetailAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HistoryDetailAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryDetailAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
