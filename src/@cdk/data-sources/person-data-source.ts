import {CollectionViewer, DataSource} from '@angular/cdk/collections';
import {Observable} from 'rxjs';
import {Person} from '../models';

export class PersonDataSource extends DataSource<Person> {

  public constructor(private people$: Observable<Person[]>) {
    super();
  }

  public connect(collectionViewer: CollectionViewer): Observable<Person[]> {
    return this.people$;
  }

  public disconnect(collectionViewer: CollectionViewer): void {
  }
}
