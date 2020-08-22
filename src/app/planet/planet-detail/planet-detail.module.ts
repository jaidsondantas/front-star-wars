import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, RouterState, Routes} from '@angular/router';
import {PlanetDetailComponent} from './planet-detail.component';
import {PlanetGridDetailModule} from '../../../@cdk/components/planet/planet-grid-detail/planet-grid-detail.module';


const routes: Routes = [
  {
    path: '',
    component: PlanetDetailComponent,
  }
];

@NgModule({
  declarations: [PlanetDetailComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    PlanetGridDetailModule,
  ],
  providers: [
  ]
})
export class PlanetDetailModule {
}
