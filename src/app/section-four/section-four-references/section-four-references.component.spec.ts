import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFourReferencesComponent } from './section-four-references.component';

describe('SectionFourReferencesComponent', () => {
  let component: SectionFourReferencesComponent;
  let fixture: ComponentFixture<SectionFourReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFourReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFourReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
