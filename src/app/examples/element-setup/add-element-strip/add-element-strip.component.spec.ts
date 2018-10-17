import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddElementStripComponent } from './add-element-strip.component';

describe('AddElementStripComponent', () => {
  let component: AddElementStripComponent;
  let fixture: ComponentFixture<AddElementStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddElementStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddElementStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
