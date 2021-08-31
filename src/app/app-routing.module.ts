import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  { path: 'home', loadChildren: () => import('./components/pages/home/home.module').then(m => m.HomeModule) }, { path: 'characte-list', loadChildren: () => import('./components/pages/characters/characte-list/characte-list.module').then(m => m.CharacteListModule) }, { path: 'characte-details/:id', loadChildren: () => import('./components/pages/characters/characte-details/characte-details.module').then(m => m.CharacteDetailsModule) }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
