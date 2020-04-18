import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThreeVideoDebriefComponent } from './section-three-video-debrief.component';

describe('SectionThreeVideoDebriefComponent', () => {
  let component: SectionThreeVideoDebriefComponent;
  let fixture: ComponentFixture<SectionThreeVideoDebriefComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionThreeVideoDebriefComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionThreeVideoDebriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
