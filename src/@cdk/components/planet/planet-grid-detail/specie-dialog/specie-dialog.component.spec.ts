import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpecieDialogComponent } from './specie-dialog.component';

describe('SpecieDialogComponent', () => {
  let component: SpecieDialogComponent;
  let fixture: ComponentFixture<SpecieDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpecieDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpecieDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
