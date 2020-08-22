import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilmChipComponent } from './film-chip.component';

describe('FilmChipComponent', () => {
  let component: FilmChipComponent;
  let fixture: ComponentFixture<FilmChipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilmChipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilmChipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
