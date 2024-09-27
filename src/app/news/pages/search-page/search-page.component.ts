import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';


import { NewsService } from '../../services/news.service';
import { New } from '../../interfaces/news.interface';
import { Router } from '@angular/router';

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

  constructor(
    private newsService: NewsService,
    private router: Router

  ){
    this.searchInput.valueChanges.subscribe(query => {
      this.onSearch(query!);
    });
  }

  onInput(event: any) {
  }

  onSearch(query: string) {
    if (query.trim().length < 3) {
      this.news = [];
      return;
    }

    this.newsService.searchNews(query)
      .subscribe(news => this.news = news);
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {  // Usa MatAutocompleteSelectedEvent
    const selectedNews: New = event.option.value; // El valor contiene el objeto completo de la noticia

    if (!selectedNews) {
      this.selectedNew = undefined;
      return;
    }

    this.selectedNew = selectedNews;
    this.router.navigate([`/news/${selectedNews._id}`]);
  }

  displayFn(news: New): string {
    return news ? news.title : '';
  }

}
