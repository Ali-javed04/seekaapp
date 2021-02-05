import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MypeopleComponent } from './mypeople.component';

describe('MypeopleComponent', () => {
  let component: MypeopleComponent;
  let fixture: ComponentFixture<MypeopleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MypeopleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MypeopleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
