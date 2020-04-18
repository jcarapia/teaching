import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThreeIntroComponent } from './section-three-intro.component';

describe('SectionThreeIntroComponent', () => {
  let component: SectionThreeIntroComponent;
  let fixture: ComponentFixture<SectionThreeIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionThreeIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionThreeIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
