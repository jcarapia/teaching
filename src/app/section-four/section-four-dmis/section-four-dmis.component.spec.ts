import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFourDmisComponent } from './section-four-dmis.component';

describe('SectionFourDmisComponent', () => {
  let component: SectionFourDmisComponent;
  let fixture: ComponentFixture<SectionFourDmisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFourDmisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFourDmisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
