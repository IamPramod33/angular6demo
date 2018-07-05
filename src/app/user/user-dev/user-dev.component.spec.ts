import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserDevComponent } from './user-dev.component';

describe('UserDevComponent', () => {
  let component: UserDevComponent;
  let fixture: ComponentFixture<UserDevComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserDevComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserDevComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
