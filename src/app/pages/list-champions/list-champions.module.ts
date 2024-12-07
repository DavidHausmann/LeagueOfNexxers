import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';

import { ListChampionsRoutingModule } from './list-champions-routing.module';
import { ListChampionsComponent } from './list-champions.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'


@NgModule({
  declarations: [
    ListChampionsComponent
  ],
  imports: [
    CommonModule,
    ListChampionsRoutingModule,
    MatTableModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule
  ]
})
export class ListChampionsModule { }
