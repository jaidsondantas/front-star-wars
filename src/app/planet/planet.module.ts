import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {PlanetComponent} from './planet.component';

const routes: Routes = [
  {
    path: '',
    component: PlanetComponent,
    children: [
      {
        path: 'list',
        loadChildren: () => import('./planet-list/planet-list.module').then(m => m.PlanetListModule),
      },
      {
        path: ':id/detail',
        loadChildren: () => import('./planet-detail/planet-detail.module').then(m => m.PlanetDetailModule),
      }
    ]
  }
];

@NgModule({
  declarations: [PlanetComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class PlanetModule {
}
