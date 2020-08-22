import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PlanetListComponent} from './planet-list.component';
import {RouterModule, Routes} from '@angular/router';
import {PlanetGridModule} from '../../../@cdk/components/planet/planet-grid/planet-grid.module';
import {HttpService} from '../../../@cdk/services/http.service';

const routes: Routes = [
  {
    path: '',
    component: PlanetListComponent,
  }
];

@NgModule({
  declarations: [PlanetListComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PlanetGridModule,
  ],
  providers: [
    HttpService
  ]
})
export class PlanetListModule {
}
