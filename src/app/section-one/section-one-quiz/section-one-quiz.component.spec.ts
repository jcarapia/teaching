import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOneQuizComponent } from './section-one-quiz.component';

describe('SectionOneQuizComponent', () => {
  let component: SectionOneQuizComponent;
  let fixture: ComponentFixture<SectionOneQuizComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOneQuizComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOneQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
