import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOneFactorsComponent } from './section-one-factors.component';

describe('SectionOneFactorsComponent', () => {
  let component: SectionOneFactorsComponent;
  let fixture: ComponentFixture<SectionOneFactorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOneFactorsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOneFactorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
