import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ReposComponent} from './repos/repos.component';

const routes: Routes = [
  {
    component: ReposComponent,
    path: ''
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReposRoutingModule { }
