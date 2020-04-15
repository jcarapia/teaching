import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwoVideoDebriefComponent } from './section-two-video-debrief.component';

describe('SectionTwoVideoDebriefComponent', () => {
  let component: SectionTwoVideoDebriefComponent;
  let fixture: ComponentFixture<SectionTwoVideoDebriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTwoVideoDebriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTwoVideoDebriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
