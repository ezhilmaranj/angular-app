import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemSearchComponent} from './components/item-search/item-search.component';

const routes: Routes = [
  {path: 'search', component: ItemSearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
