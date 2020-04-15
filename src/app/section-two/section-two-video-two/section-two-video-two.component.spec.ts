import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwoVideoTwoComponent } from './section-two-video-two.component';

describe('SectionTwoVideoTwoComponent', () => {
  let component: SectionTwoVideoTwoComponent;
  let fixture: ComponentFixture<SectionTwoVideoTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTwoVideoTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTwoVideoTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
