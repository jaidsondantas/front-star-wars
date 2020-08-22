import {Component, Input, OnChanges, OnInit} from '@angular/core';
import {Specie} from '../../../models/specie';
import {SpecieDataSource} from '../../../data-sources/specie-data-source';
import {PlanetDataSource} from '../../../data-sources/planet-data-source';
import {of} from 'rxjs';

@Component({
  selector: 'app-specie-grid',
  templateUrl: './specie-grid.component.html',
  styleUrls: ['./specie-grid.component.scss']
})
export class SpecieGridComponent implements OnInit, OnChanges{

  @Input()
  species: Specie[];

  displayedColumns: string[] = ['name'];

  dataSource: SpecieDataSource;

  constructor() {
  }

  ngOnInit(): void {
  }

  ngOnChanges(): void {
    this.dataSource = new SpecieDataSource(of(this.species));
  }

}
