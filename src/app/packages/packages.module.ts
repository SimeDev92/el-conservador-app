import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PackagesPageComponent } from '../packages/pages/packages-page/packages-page.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../material/material.module';
import { PackagesRoutingModule } from './packages-routing.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [PackagesPageComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PackagesRoutingModule,
    MaterialModule,
  ]
})
export class PackagesModule { }
