import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThreeVideoComponent } from './section-three-video.component';

describe('SectionThreeVideoComponent', () => {
  let component: SectionThreeVideoComponent;
  let fixture: ComponentFixture<SectionThreeVideoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionThreeVideoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionThreeVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
