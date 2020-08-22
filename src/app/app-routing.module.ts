import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'planets',
    loadChildren: () => import('./planet/planet.module').then(m => m.PlanetModule)
  },
  {
    path: '**',
    redirectTo: 'planets/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
