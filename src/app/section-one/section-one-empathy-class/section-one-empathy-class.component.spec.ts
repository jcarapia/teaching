import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOneEmpathyClassComponent } from './section-one-empathy-class.component';

describe('SectionOneEmpathyClassComponent', () => {
  let component: SectionOneEmpathyClassComponent;
  let fixture: ComponentFixture<SectionOneEmpathyClassComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOneEmpathyClassComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOneEmpathyClassComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
