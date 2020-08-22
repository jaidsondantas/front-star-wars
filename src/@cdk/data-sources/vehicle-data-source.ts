import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {Vehicle} from '../models';

export class VehicleDataSource extends DataSource<Vehicle> {

  public constructor(private vehicles$: Observable<Vehicle[]>) {
    super();
  }

  public connect(collectionViewer: CollectionViewer): Observable<Vehicle[]> {
    return this.vehicles$;
  }

  public disconnect(collectionViewer: CollectionViewer): void {
  }
}
