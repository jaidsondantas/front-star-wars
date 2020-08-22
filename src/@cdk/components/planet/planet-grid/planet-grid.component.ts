import {AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output, ViewChild} from '@angular/core';
import {Film, Planet} from '../../../models';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {PlanetDataSource} from '../../../data-sources/planet-data-source';
import {merge, of} from 'rxjs';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {tap} from 'rxjs/operators';
import {Params} from '../../../models/Params';
import {MatDialog} from '@angular/material/dialog';
import {FilmDialogComponent} from '../../film/film-dialog/film-dialog.component';
import {environment} from '../../../../environments/environment';
import {HttpService} from '../../../services/http.service';

@Component({
  selector: 'app-planet-grid',
  templateUrl: './planet-grid.component.html',
  styleUrls: ['./planet-grid.component.scss']
})
export class PlanetGridComponent implements OnInit, OnChanges, AfterViewInit {


  @Input()
  planets: Planet[];

  @Input()
  total: number;

  @Input()
  loading: false;

  displayedColumns: string[] = ['name', 'terrain', 'diameter', 'climate', 'films', 'actions'];

  @Input()
  actions: string[] = ['detail'];

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  @ViewChild(MatSort, {static: true})
  sort: MatSort;

  @Output()
  reload = new EventEmitter<any>();

  @Output()
  detail = new EventEmitter<Planet>();

  pageSize = 10;
  form: FormGroup;

  dataSource: PlanetDataSource;

  constructor(
    private formBuilder: FormBuilder,
    public dialog: MatDialog,
    private httpService: HttpService
  ) {
    this.initForm();
  }


  private initForm(): void {
    this.form = this.formBuilder.group({
      search: [null, Validators.required]
    });
  }

  ngOnChanges(): void {
    this.dataSource = new PlanetDataSource(of(this.planets));
    if (this.total) {
      this.loadTable();
      this.paginator.length = this.total;
    }

  }

  ngOnInit(): void {
    this.form.get('search').valueChanges.subscribe((value) => {
      if (value === '') {
        this.loadPage();
      }
    });
  }

  dDetail(planet: Planet): void {
    this.detail.emit(planet);
  }

  loadTable(): void {
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
    this.paginator._intl.nextPageLabel = 'Seguinte';
    this.paginator._intl.previousPageLabel = 'Anterior';

    this.paginator.pageSize = this.pageSize;
  }

  searchSubmit(): void {
    const params = new Params();
    params.search = this.form.get('search').value;
    this.paginator.pageIndex = 0;
    this.reload.emit(params);
  }

  loadPage(): void {
    const params = new Params();
    params.page = this.paginator.pageIndex + 1;
    params.search = this.form.get('search').value;
    this.reload.emit(params);
  }

  ngAfterViewInit(): void {
    merge(
      this.paginator.page
    ).pipe(
      tap(() => this.loadPage())
    ).subscribe();
  }

  openDialog(urls: any[]): void {
    this.getFilms(urls);
  }

  private getFilms(urls: any[]): void {
    const films: Film[] = [];
    urls.forEach((url) => {
      const path = url.split(environment.baseUrl);
      this.httpService.get(path[1]).subscribe((film) => {
        films.push(film);
        if (urls.length === films.length) {
          this.dialog.open(FilmDialogComponent, {
            data: {films}
          });
        }
      });
    });
  }
}
