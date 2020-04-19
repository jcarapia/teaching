import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFourIntroComponent } from './section-four-intro.component';

describe('SectionFourIntroComponent', () => {
  let component: SectionFourIntroComponent;
  let fixture: ComponentFixture<SectionFourIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFourIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFourIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
