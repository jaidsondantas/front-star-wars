import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpecieGridComponent } from './specie-grid.component';
import {MatTableModule} from '@angular/material/table';



@NgModule({
    declarations: [SpecieGridComponent],
    exports: [
        SpecieGridComponent
    ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class SpecieGridModule { }
