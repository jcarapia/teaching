import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOneIntroComponent } from './section-one-intro.component';

describe('SectionOneIntroComponent', () => {
  let component: SectionOneIntroComponent;
  let fixture: ComponentFixture<SectionOneIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOneIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOneIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
