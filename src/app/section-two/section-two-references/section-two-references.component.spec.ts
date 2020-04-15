import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwoReferencesComponent } from './section-two-references.component';

describe('SectionTwoReferencesComponent', () => {
  let component: SectionTwoReferencesComponent;
  let fixture: ComponentFixture<SectionTwoReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTwoReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTwoReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
