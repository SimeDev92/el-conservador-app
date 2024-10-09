import { NgModule } from '@angular/core';
import { Error404PageComponent } from './pages/error404-page/error404-page.component';
import { FooterComponent } from './footer/footer.component';
import { MaterialModule } from '../material/material.module';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { LayoutPageComponent } from './layout-page/layout-page.component';



@NgModule({
  declarations: [
    LayoutPageComponent,
    Error404PageComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MaterialModule,

  ],
  exports: [
    LayoutPageComponent,
    Error404PageComponent,
    FooterComponent
  ]
})
export class SharedModule { }
