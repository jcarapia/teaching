import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFourWrapUpComponent } from './section-four-wrap-up.component';

describe('SectionFourWrapUpComponent', () => {
  let component: SectionFourWrapUpComponent;
  let fixture: ComponentFixture<SectionFourWrapUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFourWrapUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFourWrapUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
