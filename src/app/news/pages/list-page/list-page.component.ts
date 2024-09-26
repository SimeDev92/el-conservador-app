import { Component, OnInit } from '@angular/core';
import { New } from '../../interfaces/news.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: [
  ]
})
export class ListPageComponent implements OnInit {

  public news: New[] = [];

  constructor( private newsService: NewsService ) {}

  ngOnInit(): void {
    this.newsService.getNews()
      .subscribe( news => this.news = news );
  }

}
