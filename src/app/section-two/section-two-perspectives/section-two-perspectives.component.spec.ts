import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwoPerspectivesComponent } from './section-two-perspectives.component';

describe('SectionTwoPerspectivesComponent', () => {
  let component: SectionTwoPerspectivesComponent;
  let fixture: ComponentFixture<SectionTwoPerspectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTwoPerspectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTwoPerspectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
