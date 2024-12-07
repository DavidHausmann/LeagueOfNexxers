import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChampionDetailsRoutingModule } from './champion-details-routing.module';
import { ChampionDetailsComponent } from './champion-details.component';


@NgModule({
  declarations: [
    ChampionDetailsComponent
  ],
  imports: [
    CommonModule,
    ChampionDetailsRoutingModule
  ]
})
export class ChampionDetailsModule { }
