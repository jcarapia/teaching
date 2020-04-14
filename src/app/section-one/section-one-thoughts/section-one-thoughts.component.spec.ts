import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOneThoughtsComponent } from './section-one-thoughts.component';

describe('SectionOneThoughtsComponent', () => {
  let component: SectionOneThoughtsComponent;
  let fixture: ComponentFixture<SectionOneThoughtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionOneThoughtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOneThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
