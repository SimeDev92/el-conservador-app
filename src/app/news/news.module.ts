import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { NewsRoutingModule } from './news.routing.module';

import { MaterialModule } from '../material/material.module';

import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { CardComponent } from './components/card/card.component';
import { NewImagePipe } from './pipes/new-image.pipe';
import { NewPageComponent } from './pages/new-page/new-page.component';


@NgModule({
  declarations: [
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,
    // Pipes
    NewImagePipe,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NewsRoutingModule,
    MaterialModule,
  ]
})
export class NewsModule { }
