import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { New } from '../../interfaces/news.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-new-page',
  templateUrl: './new-page.component.html',
  styles: []
})
export class NewPageComponent implements OnInit {

  public newsItem?: New;

  constructor(
    private newsService: NewsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => this.newsService.getNewById(id)),
      )
      .subscribe(newsItem => {

        if (!newsItem) return this.router.navigate(['/news']);

        newsItem.date = newsItem.date.split('T')[0];
        
        this.newsItem = newsItem;
        return;
      })
  }

  goBack(): void {
    this.router.navigateByUrl('/news');
  }

}
