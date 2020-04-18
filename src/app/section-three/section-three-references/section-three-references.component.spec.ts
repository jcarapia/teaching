import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThreeReferencesComponent } from './section-three-references.component';

describe('SectionThreeReferencesComponent', () => {
  let component: SectionThreeReferencesComponent;
  let fixture: ComponentFixture<SectionThreeReferencesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionThreeReferencesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionThreeReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
