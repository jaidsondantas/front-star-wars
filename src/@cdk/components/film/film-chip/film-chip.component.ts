import {Component, Input, OnInit} from '@angular/core';
import {Film} from '../../../models';

@Component({
  selector: 'app-film-chip',
  templateUrl: './film-chip.component.html',
  styleUrls: ['./film-chip.component.scss']
})
export class FilmChipComponent implements OnInit {

  @Input()
  films: Film[];

  constructor() { }

  ngOnInit(): void {
  }

}
