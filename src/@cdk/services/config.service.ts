import {Injectable, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  @ViewChild(MatPaginator, {static: true})
  paginator: MatPaginator;

  pageSize = 5;

  constructor() {
    this.paginator._intl.itemsPerPageLabel = 'Registros por página';
    this.paginator._intl.nextPageLabel = 'Seguinte';
    this.paginator._intl.previousPageLabel = 'Anterior';
    this.paginator.pageSize = this.pageSize;
  }

  getPaginator(): MatPaginator {
    return this.paginator;
  }
}
