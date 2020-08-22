import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {VehicleGridComponent} from './vehicle-grid.component';
import {MatTableModule} from '@angular/material/table';


@NgModule({
  declarations: [VehicleGridComponent],
  exports: [
    VehicleGridComponent
  ],
  imports: [
    CommonModule,
    MatTableModule
  ]
})
export class VehicleGridModule {
}
