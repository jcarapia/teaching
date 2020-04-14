import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOneWrapUpComponent } from './section-one-wrap-up.component';

describe('SectionOneWrapUpComponent', () => {
  let component: SectionOneWrapUpComponent;
  let fixture: ComponentFixture<SectionOneWrapUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOneWrapUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOneWrapUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
