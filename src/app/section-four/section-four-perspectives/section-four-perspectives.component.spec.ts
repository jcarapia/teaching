import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFourPerspectivesComponent } from './section-four-perspectives.component';

describe('SectionFourPerspectivesComponent', () => {
  let component: SectionFourPerspectivesComponent;
  let fixture: ComponentFixture<SectionFourPerspectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFourPerspectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFourPerspectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
