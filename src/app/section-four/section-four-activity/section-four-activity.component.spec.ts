import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFourActivityComponent } from './section-four-activity.component';

describe('SectionFourActivityComponent', () => {
  let component: SectionFourActivityComponent;
  let fixture: ComponentFixture<SectionFourActivityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFourActivityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFourActivityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
