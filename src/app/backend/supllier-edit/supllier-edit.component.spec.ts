import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupllierEditComponent } from './supllier-edit.component';

describe('SupllierEditComponent', () => {
  let component: SupllierEditComponent;
  let fixture: ComponentFixture<SupllierEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupllierEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupllierEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
