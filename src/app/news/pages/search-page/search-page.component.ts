import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


import { NewsService } from '../../services/news.service';
import { New } from '../../interfaces/news.interface';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: [
  ]
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public news: New[] = [];
  public selectedNew?: New;

  constructor( private newsService: NewsService ){}

  onInput(event: any) {
    // Por ahora no hace nada
  }
  // searchNew() {
  //   const value: string = this.searchInput.value || '';

  //   this.newsService.getSuggestions( value )
  //     .subscribe( news => this.news = news );
  // }


  // onSelectedOption( event: MatAutocompleteSelectedEvent ): void {
  //   if ( !event.option.value ) {
  //     this.selectedHero = undefined;
  //     return;
  //   }

  //   const new: New = event.option.value;
  //   this.searchInput.setValue( new.title );

  //   this.selectedNew = new;

  // }


}
