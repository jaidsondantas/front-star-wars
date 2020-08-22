import {ChangeDetectorRef, Component, Input, OnChanges, OnInit, SimpleChange} from '@angular/core';
import {Person, Planet, Vehicle} from '../../../models';
import {PlanetDataSource} from '../../../data-sources/planet-data-source';
import {of} from 'rxjs';
import {PersonDataSource} from '../../../data-sources/person-data-source';
import {environment} from '../../../../environments/environment';
import {HttpService} from '../../../services/http.service';
import {Specie} from '../../../models/specie';
import {FilmDialogComponent} from '../../film/film-dialog/film-dialog.component';
import {MatDialog} from '@angular/material/dialog';
import {SpecieGridComponent} from '../../specie/specie-grid/specie-grid.component';
import {SpecieDialogComponent} from './specie-dialog/specie-dialog.component';
import {VehicleDialogComponent} from './vehicle-dialog/vehicle-dialog.component';

@Component({
  selector: 'app-planet-grid-detail',
  templateUrl: './planet-grid-detail.component.html',
  styleUrls: ['./planet-grid-detail.component.scss']
})
export class PlanetGridDetailComponent implements OnInit, OnChanges {

  @Input()
  planet: Planet;

  residents: Person[] = [];

  displayedColumns: string[] = ['rotationPeriod', 'orbitalPeriod', 'terrain', 'diameter', 'climate', 'gravity', 'population'];
  displayedColumnsPeople: string[] = ['name', 'hairColor', 'eyeColor', 'gender', 'species', 'vehicles'];
  loading: boolean;

  dataSource: PlanetDataSource;
  dataSourcePeople: PersonDataSource;

  constructor(
    private httpService: HttpService,
    private changeDetectorRef: ChangeDetectorRef,
    public dialog: MatDialog,
  ) {
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: { [propName: string]: SimpleChange }): void {
    if (this.planet) {
      this.dataSource = new PlanetDataSource(of([this.planet]));
      this.getResidents(this.planet?.residents);
    }
    this.changeDetectorRef.markForCheck();
  }

  openDialog(vehicles: any): void {

  }

  private getResidents(urls: any[]): void {
    const people = [];
    urls.forEach((url) => {
      const path = url.split(environment.baseUrl);
      this.httpService.get(path[1]).subscribe((person) => {
        people.push(person);
        if (urls.length === people.length) {
          this.residents = people;
          this.dataSourcePeople = new PersonDataSource(of(this.residents));
        }
      });
    });
  }

  private getSpecies(urls: any[]): Specie[] {
    const species: Specie[] = [];
    urls.forEach((url) => {
      const path = url.split(environment.baseUrl);
      this.httpService.get(path[1]).subscribe((specie) => {
        species.push(specie);
        if (urls.length === species.length) {
          this.dialog.open(SpecieDialogComponent, {
            data: {species}
          });
        }
      });
    });
    return species;
  }

  private getVehicles(urls: any[]): Specie[] {
    const vehicles: Vehicle[] = [];
    urls.forEach((url) => {
      const path = url.split(environment.baseUrl);
      this.httpService.get(path[1]).subscribe((vehicle) => {
        vehicles.push(vehicle);
        if (urls.length === vehicles.length) {
          this.dialog.open(VehicleDialogComponent, {
            data: {vehicles}
          });
        }
      });
    });
    return vehicles;
  }


}
