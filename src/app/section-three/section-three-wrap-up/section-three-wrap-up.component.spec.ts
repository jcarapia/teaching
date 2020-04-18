import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThreeWrapUpComponent } from './section-three-wrap-up.component';

describe('SectionThreeWrapUpComponent', () => {
  let component: SectionThreeWrapUpComponent;
  let fixture: ComponentFixture<SectionThreeWrapUpComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionThreeWrapUpComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionThreeWrapUpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
