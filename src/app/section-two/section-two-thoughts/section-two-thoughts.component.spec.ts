import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTwoThoughtsComponent } from './section-two-thoughts.component';

describe('SectionTwoThoughtsComponent', () => {
  let component: SectionTwoThoughtsComponent;
  let fixture: ComponentFixture<SectionTwoThoughtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTwoThoughtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTwoThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
