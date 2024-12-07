import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPageLayoutComponent } from 'src/app/layout/full-page-layout/full-page-layout.component';
import { ListChampionsComponent } from './list-champions.component';

const routes: Routes = [{
  path: 'listar-campeoes',
  component: FullPageLayoutComponent,
  children: [{
    path: '',
    component: ListChampionsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ListChampionsRoutingModule { }
