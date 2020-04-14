import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOnePerspectivesComponent } from './section-one-perspectives.component';

describe('SectionOnePerspectivesComponent', () => {
  let component: SectionOnePerspectivesComponent;
  let fixture: ComponentFixture<SectionOnePerspectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOnePerspectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOnePerspectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
