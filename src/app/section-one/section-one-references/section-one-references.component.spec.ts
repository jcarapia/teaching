import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOneReferencesComponent } from './section-one-references.component';

describe('SectionOneReferencesComponent', () => {
  let component: SectionOneReferencesComponent;
  let fixture: ComponentFixture<SectionOneReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOneReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOneReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
