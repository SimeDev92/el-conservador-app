import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardLayoutComponent } from './dashboard-layout.component';

// localhost:4200/dashboard/
const routes: Routes = [
  {
    path: '',
    component: DashboardLayoutComponent,
    // children: []
  }
];

@NgModule({
  imports: [ RouterModule.forChild( routes ) ],
  exports: [ RouterModule ],
})
export class DashboardRoutingModule { }
