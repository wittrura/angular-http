import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroListComponentPromise } from './hero-list.component.promise';

describe('HeroListComponent', () => {
  let component: HeroListComponentPromise;
  let fixture: ComponentFixture<HeroListComponentPromise>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeroListComponentPromise ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroListComponentPromise);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
