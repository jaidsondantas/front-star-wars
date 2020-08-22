import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {Specie} from '../models';

export class SpecieDataSource extends DataSource<Specie> {

  public constructor(private species$: Observable<Specie[]>) {
    super();
  }

  public connect(collectionViewer: CollectionViewer): Observable<Specie[]> {
    return this.species$;
  }

  public disconnect(collectionViewer: CollectionViewer): void {
  }
}
