import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {Planet} from '../models';

export class PlanetDataSource extends DataSource<Planet> {

  public constructor(private planets$: Observable<Planet[]>) {
    super();
  }

  public connect(collectionViewer: CollectionViewer): Observable<Planet[]> {
    return this.planets$;
  }

  public disconnect(collectionViewer: CollectionViewer): void {
  }
}
