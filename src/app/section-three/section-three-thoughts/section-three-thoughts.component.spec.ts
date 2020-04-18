import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionThreeThoughtsComponent } from './section-three-thoughts.component';

describe('SectionThreeThoughtsComponent', () => {
  let component: SectionThreeThoughtsComponent;
  let fixture: ComponentFixture<SectionThreeThoughtsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionThreeThoughtsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionThreeThoughtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
