import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {Film} from '../../../models';

@Component({
  selector: 'app-film-dialog',
  templateUrl: './film-dialog.component.html',
  styleUrls: ['./film-dialog.component.scss']
})
export class FilmDialogComponent implements OnInit {

  films: Film[];

  constructor(
    public dialogRef: MatDialogRef<FilmDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {
    this.films = this.data.films;
    console.log(this.films);
  }

  ngOnInit(): void {
  }

}
