import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSectionStripComponent } from './add-section-strip.component';

describe('AddSectionStripComponent', () => {
  let component: AddSectionStripComponent;
  let fixture: ComponentFixture<AddSectionStripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSectionStripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSectionStripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
