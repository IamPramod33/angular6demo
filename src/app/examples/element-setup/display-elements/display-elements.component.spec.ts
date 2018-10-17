import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayElementsComponent } from './display-elements.component';

describe('DisplayElementsComponent', () => {
  let component: DisplayElementsComponent;
  let fixture: ComponentFixture<DisplayElementsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayElementsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayElementsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
