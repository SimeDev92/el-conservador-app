import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesPageComponent } from '../packages/pages/packages-page/packages-page.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { PackagesRoutingModule } from './packages-routing.module';
import { NewsModule } from '../news/news.module';

@NgModule({
  declarations: [PackagesPageComponent],
  imports: [
    CommonModule,
    RouterModule,
    PackagesRoutingModule,
    MaterialModule,
    NewsModule

  ]
})
export class PackagesModule { }
