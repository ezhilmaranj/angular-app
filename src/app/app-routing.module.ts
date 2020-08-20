import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ItemSearchComponent} from './components/item-search/item-search.component';
import {HomeComponent} from './components/home/home.component';

const routes: Routes = [
  {path: 'search', component: ItemSearchComponent},
  {path: '*', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
