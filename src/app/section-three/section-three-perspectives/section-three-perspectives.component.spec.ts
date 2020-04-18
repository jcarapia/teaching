import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThreePerspectivesComponent } from './section-three-perspectives.component';

describe('SectionThreePerspectivesComponent', () => {
  let component: SectionThreePerspectivesComponent;
  let fixture: ComponentFixture<SectionThreePerspectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionThreePerspectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionThreePerspectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
