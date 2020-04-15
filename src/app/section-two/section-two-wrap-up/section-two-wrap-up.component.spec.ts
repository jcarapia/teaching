import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwoWrapUpComponent } from './section-two-wrap-up.component';

describe('SectionTwoWrapUpComponent', () => {
  let component: SectionTwoWrapUpComponent;
  let fixture: ComponentFixture<SectionTwoWrapUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTwoWrapUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTwoWrapUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
