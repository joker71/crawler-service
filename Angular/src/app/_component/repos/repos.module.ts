import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposRoutingModule } from './repos-routing.module';
import { ReposComponent } from './repos/repos.component';
import { MatPaginator } from '@angular/material/paginator';


@NgModule({
  declarations: [
    ReposComponent,
  ],
  imports: [
    CommonModule,
    ReposRoutingModule,
    MatPaginator,
  ]
})
export class ReposModule { }
