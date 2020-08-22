import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetGridComponent} from './planet-grid.component';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {FlexModule} from '@angular/flex-layout';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FilmChipModule} from '../../film/film-chip/film-chip.module';
import {MatDialog, MatDialogModule} from '@angular/material/dialog';
import {FilmDialogComponent} from '../../film/film-dialog/film-dialog.component';


@NgModule({
  declarations: [PlanetGridComponent, FilmDialogComponent],
  exports: [
    PlanetGridComponent,
  ],
  imports: [
    CommonModule,
    MatTableModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatIconModule,
    MatProgressBarModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    FlexModule,
    MatTooltipModule,
    FilmChipModule,
    MatDialogModule
  ],
  providers: [
    MatDialog
  ]
})
export class PlanetGridModule {
}
