import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwoVideoOneComponent } from './section-two-video-one.component';

describe('SectionTwoVideoOneComponent', () => {
  let component: SectionTwoVideoOneComponent;
  let fixture: ComponentFixture<SectionTwoVideoOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTwoVideoOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTwoVideoOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
