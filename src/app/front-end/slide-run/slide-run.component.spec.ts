import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SlideRunComponent } from './slide-run.component';

describe('SlideRunComponent', () => {
  let component: SlideRunComponent;
  let fixture: ComponentFixture<SlideRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SlideRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SlideRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
