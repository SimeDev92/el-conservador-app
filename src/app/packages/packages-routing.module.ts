import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PackagesPageComponent } from './pages/packages-page/packages-page.component';

const routes: Routes = [
  {
    path: '',
    component: PackagesPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PackagesRoutingModule { }
