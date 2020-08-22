import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetGridDetailComponent } from './planet-grid-detail.component';

describe('PlanetGridDetailComponent', () => {
  let component: PlanetGridDetailComponent;
  let fixture: ComponentFixture<PlanetGridDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetGridDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetGridDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
