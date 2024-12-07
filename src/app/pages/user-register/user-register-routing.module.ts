import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FullPageLayoutComponent } from 'src/app/layout/full-page-layout/full-page-layout.component';
import { UserRegisterComponent } from './user-register.component';

const routes: Routes = [{
  path: 'registrar-usuario',
  component: FullPageLayoutComponent,
  children: [{
    path: '',
    component: UserRegisterComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRegisterRoutingModule { }
