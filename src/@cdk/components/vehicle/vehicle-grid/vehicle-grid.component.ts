import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {of} from 'rxjs';
import {VehicleDataSource} from '../../../data-sources/vehicle-data-source';
import {Vehicle} from '../../../models';

@Component({
  selector: 'app-vehicle-grid',
  templateUrl: './vehicle-grid.component.html',
  styleUrls: ['./vehicle-grid.component.scss']
})
export class VehicleGridComponent implements OnInit, OnChanges {

  @Input()
  vehicles: Vehicle[];

  displayedColumns: string[] = ['name', 'model'];

  dataSource: VehicleDataSource;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.dataSource = new VehicleDataSource(of(this.vehicles));
  }

}
