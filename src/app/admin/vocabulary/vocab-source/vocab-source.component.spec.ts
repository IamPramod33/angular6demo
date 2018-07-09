import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VocabSourceComponent } from './vocab-source.component';

describe('VocabSourceComponent', () => {
  let component: VocabSourceComponent;
  let fixture: ComponentFixture<VocabSourceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VocabSourceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VocabSourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
