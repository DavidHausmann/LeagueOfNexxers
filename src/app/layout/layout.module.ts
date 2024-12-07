import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullPageLayoutComponent } from './full-page-layout/full-page-layout.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FullPageLayoutComponent,
  ],
  exports: [
    FullPageLayoutComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forChild([])
  ]
})
export class LayoutModule { }
