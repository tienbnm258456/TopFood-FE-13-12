import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupllierDetailComponent } from './supllier-detail.component';

describe('SupllierDetailComponent', () => {
  let component: SupllierDetailComponent;
  let fixture: ComponentFixture<SupllierDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupllierDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupllierDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
