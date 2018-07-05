import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserHrComponent } from './user-hr.component';

describe('UserHrComponent', () => {
  let component: UserHrComponent;
  let fixture: ComponentFixture<UserHrComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserHrComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserHrComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
