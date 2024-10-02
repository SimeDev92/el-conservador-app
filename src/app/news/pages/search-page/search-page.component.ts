import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { NewsService } from '../../services/news.service';
import { New } from '../../interfaces/news.interface';
import { Router } from '@angular/router';
import { debounceTime, switchMap, of } from 'rxjs';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent {
  public searchForm: FormGroup;
  public news: New[] = [];
  public selectedNew?: New;

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {
    this.searchForm = new FormGroup({
      searchInput: new FormControl(''),
      dateInput: new FormControl('')
    });

    this.searchForm.get('searchInput')!.valueChanges.pipe(
      debounceTime(300),
      switchMap(query => {
        if (query && query.trim().length >= 3) {
          return this.newsService.searchNews(query);
        }
        return of([]);
      })
    ).subscribe(news => this.news = news);

    this.searchForm.get('dateInput')!.valueChanges.pipe(
      debounceTime(300),
      switchMap(date => {
        if (date) {
          return this.newsService.getNewsByDate(date);
        }
        return of([]);
      })
    ).subscribe(news => this.news = news);
  }

  onSelectedOption(event: MatAutocompleteSelectedEvent): void {
    const selectedNews: New = event.option.value;
    if (!selectedNews) {
      this.selectedNew = undefined;
      return;
    }
    this.selectedNew = selectedNews;
  }

  displayFn(news: New): string {
    return news ? news.title : '';
  }

  goBack(): void {
    this.router.navigate(['/news']);
  }
}
