import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { NewsArticle } from '../models/news.model';

@Injectable()
export class NewsService {

  private searchSubject = new Subject<NewsArticle>();  
  search$ = this.searchSubject.asObservable(); 
  news$: any;

  emitSearchQuery(query: NewsArticle) {
    this.searchSubject.next(query);
  }
}
