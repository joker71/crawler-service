import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReposRoutingModule } from './repos-routing.module';
import { ReposComponent } from './repos/repos.component';
import { MatPaginator } from '@angular/material/paginator';
import { ReleaseComponent } from './release/release.component';


@NgModule({
  declarations: [
    ReposComponent,
    ReleaseComponent,
  ],
  imports: [
    CommonModule,
    ReposRoutingModule,
    MatPaginator,
  ]
})
export class ReposModule { }
