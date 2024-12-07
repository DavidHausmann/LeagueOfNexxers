import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPageLayoutComponent } from 'src/app/layout/full-page-layout/full-page-layout.component';
import { LoginComponent } from './login.component';

const routes: Routes = [{
  path: 'login',
  component: FullPageLayoutComponent,
  children: [{
    path: '',
    component: LoginComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
