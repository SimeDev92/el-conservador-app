import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { New } from '../../interfaces/news.interface';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: []
})
export class ListPageComponent implements OnInit {

  public news: New[] = [];
  public selectedCategory: string = '';

  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    // Capturamos el parámetro 'category' de la URL
    this.route.params.subscribe(params => {
      this.selectedCategory = params['category'] || '';
      console.log('Categoría seleccionada:', this.selectedCategory); // Asegúrate de que se imprima correctamente
      this.loadNews();
    });
  }

  loadNews(): void {
    this.news = [];
    if (this.selectedCategory) {
      console.log('Cargando noticias de la categoría:', this.selectedCategory); // Comprobación de carga
      this.newsService.getNewsByCategory(this.selectedCategory)
        .subscribe(news => {
          this.news = news;
          console.log('Noticias filtradas:', this.news); // Para ver qué noticias se están cargando
        });
    } else {
      this.newsService.getNews()
        .subscribe(news => {
          this.news = news;
          console.log('Cargando todas las noticias:', this.news); // Comprobación de carga
        });
    }
  }

}
