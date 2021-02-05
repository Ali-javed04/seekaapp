import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScholorshipComponent } from './scholorship.component';

describe('ScholorshipComponent', () => {
  let component: ScholorshipComponent;
  let fixture: ComponentFixture<ScholorshipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScholorshipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ScholorshipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
