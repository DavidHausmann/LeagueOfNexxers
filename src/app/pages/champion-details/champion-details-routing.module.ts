import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPageLayoutComponent } from 'src/app/layout/full-page-layout/full-page-layout.component';
import { ChampionDetailsComponent } from './champion-details.component';

const routes: Routes = [{
  path: 'detalhes-do-campeao',
  component: FullPageLayoutComponent,
  children: [{
    path: '',
    component: ChampionDetailsComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ChampionDetailsRoutingModule { }
