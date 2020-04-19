import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFourThoughtsComponent } from './section-four-thoughts.component';

describe('SectionFourThoughtsComponent', () => {
  let component: SectionFourThoughtsComponent;
  let fixture: ComponentFixture<SectionFourThoughtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFourThoughtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFourThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
