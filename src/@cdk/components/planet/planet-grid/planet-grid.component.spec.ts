import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetGridComponent } from './planet-grid.component';

describe('PlanetGridComponent', () => {
  let component: PlanetGridComponent;
  let fixture: ComponentFixture<PlanetGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
