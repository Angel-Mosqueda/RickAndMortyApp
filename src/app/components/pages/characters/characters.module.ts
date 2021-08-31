import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { CharacteDetailsComponent } from './characte-details/characte-details.component';
import { CharacteListComponent } from './characte-list/characte-list.component';
import { CharacterComponent } from './character.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

const myComponents = [CharacteDetailsComponent, CharacteListComponent,CharacterComponent]

@NgModule({
  declarations: [...myComponents],
  imports: [
    CommonModule, RouterModule, InfiniteScrollModule
  ],
  exports:[...myComponents]
})
export class CharactersModule { }
