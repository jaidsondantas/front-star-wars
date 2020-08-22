import {Component, Inject, OnInit} from '@angular/core';
import {Specie} from '../../../../models/specie';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Vehicle} from '../../../../models';

@Component({
  selector: 'app-specie-dialog',
  templateUrl: './vehicle-dialog.component.html',
  styleUrls: ['./vehicle-dialog.component.scss']
})
export class VehicleDialogComponent implements OnInit {

  vehicles: Vehicle[];


  constructor(
    public dialogRef: MatDialogRef<VehicleDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.vehicles = this.data.vehicles;
  }

  ngOnInit(): void {
  }

}
