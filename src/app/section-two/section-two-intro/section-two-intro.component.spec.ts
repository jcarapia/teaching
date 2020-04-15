import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwoIntroComponent } from './section-two-intro.component';

describe('SectionTwoIntroComponent', () => {
  let component: SectionTwoIntroComponent;
  let fixture: ComponentFixture<SectionTwoIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTwoIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTwoIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
