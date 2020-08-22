import {Component, Inject, OnInit} from '@angular/core';
import {Specie} from '../../../../models/specie';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

@Component({
  selector: 'app-specie-dialog',
  templateUrl: './specie-dialog.component.html',
  styleUrls: ['./specie-dialog.component.scss']
})
export class SpecieDialogComponent implements OnInit {

  species: Specie[];


  constructor(
    public dialogRef: MatDialogRef<SpecieDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.species = this.data.species;
  }

  ngOnInit(): void {
  }

}
