import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetGridDetailComponent} from './planet-grid-detail.component';
import {MatTabsModule} from '@angular/material/tabs';
import {FlexModule} from '@angular/flex-layout';
import {MatTableModule} from '@angular/material/table';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatButtonModule} from '@angular/material/button';
import {SpecieDialogComponent} from './specie-dialog/specie-dialog.component';
import {SpecieGridModule} from '../../specie/specie-grid/specie-grid.module';
import {MatDialogModule} from '@angular/material/dialog';
import {VehicleDialogComponent} from './vehicle-dialog/vehicle-dialog.component';
import {VehicleGridModule} from '../../vehicle/vehicle-grid/vehicle-grid.module';


@NgModule({
  declarations: [PlanetGridDetailComponent, SpecieDialogComponent, VehicleDialogComponent],
  exports: [
    PlanetGridDetailComponent
  ],
  imports: [
    CommonModule,
    MatTabsModule,
    FlexModule,
    MatTableModule,
    MatExpansionModule,
    MatIconModule,
    MatTooltipModule,
    MatButtonModule,
    SpecieGridModule,
    MatDialogModule,
    VehicleGridModule
  ]
})
export class PlanetGridDetailModule {
}
