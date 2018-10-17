import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementSetupComponent } from './element-setup.component';

describe('ElementSetupComponent', () => {
  let component: ElementSetupComponent;
  let fixture: ComponentFixture<ElementSetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementSetupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementSetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
