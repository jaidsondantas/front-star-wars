import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilmChipComponent} from './film-chip.component';
import {MatChipsModule} from '@angular/material/chips';
import {DragDropModule} from '@angular/cdk/drag-drop';


@NgModule({
  declarations: [FilmChipComponent],
  exports: [
    FilmChipComponent
  ],
  imports: [
    CommonModule,
    MatChipsModule,
    DragDropModule
  ]
})
export class FilmChipModule {
}
