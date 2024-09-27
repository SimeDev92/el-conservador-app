import { New } from './../interfaces/news.interface';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, Observable, of } from 'rxjs';
import { environments } from '../../../environments/environments';


@Injectable({ providedIn: 'root' })
export class NewsService {

  private baseUrl: string = environments.baseUrl;


  constructor(private http: HttpClient) { }


  getNews():Observable<New[]> {
    return this.http.get<New[]>(`${ this.baseUrl }/news`);
  }

  getNewById( id: string ): Observable<New|undefined> {
    return this.http.get<New>(`${ this.baseUrl }/news/${ id }`)
      .pipe(
        catchError( error => of(undefined) )
      );
  }

  searchNews(query: string): Observable<New[]> {
    return this.http.get<New[]>(`${this.baseUrl}/news/search?query=${query}`)
      .pipe(
        catchError(error => of([])) // Manejo de errores retornando un array vacío si falla
      );
  }

  getNewsByCategory(category: string): Observable<New[]> {
    return this.http.get<New[]>(`${this.baseUrl}/news/category/${category}`);
  }
}
