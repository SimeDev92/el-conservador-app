import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { New } from '../../interfaces/news.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [`
    .news-grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
      gap: 20px;
      padding: 20px;
    }

    @media (max-width: 600px) {
      .news-grid {
        grid-template-columns: 1fr;
      }
    }
  `]
})
export class ListPageComponent implements OnInit {

  public news: New[] = [];
  public selectedCategory: string = '';

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.selectedCategory = params['category'] || '';
      this.loadNews();
    });
  }

  loadNews(): void {
    this.news = [];
    if (this.selectedCategory) {
      this.newsService.getNewsByCategory(this.selectedCategory)
        .subscribe(news => {
          this.news = news;
        });
    } else {
      this.newsService.getNews()
        .subscribe(news => {
          this.news = news;
        });
    }
  }
}
