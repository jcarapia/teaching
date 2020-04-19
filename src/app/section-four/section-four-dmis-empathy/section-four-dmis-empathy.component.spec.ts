import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFourDmisEmpathyComponent } from './section-four-dmis-empathy.component';

describe('SectionFourDmisEmpathyComponent', () => {
  let component: SectionFourDmisEmpathyComponent;
  let fixture: ComponentFixture<SectionFourDmisEmpathyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFourDmisEmpathyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFourDmisEmpathyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
