import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieGridComponent } from './specie-grid.component';

describe('SpecieGridComponent', () => {
  let component: SpecieGridComponent;
  let fixture: ComponentFixture<SpecieGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecieGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecieGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
