import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacteListComponent } from './characte-list.component';

const routes: Routes = [{ path: '', component: CharacteListComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CharacteListRoutingModule { }
