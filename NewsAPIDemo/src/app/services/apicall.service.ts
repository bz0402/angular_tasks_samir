import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { NewsResponse } from 'src/app/models/news.model';  

@Injectable({
  providedIn: 'root',
})
export class APICallService {
  private searchQuerySubject: BehaviorSubject<string> = new BehaviorSubject<string>('');  
  public searchQuery$ = this.searchQuerySubject.asObservable();

  constructor(private http: HttpClient) {}

  setSearchQuery(query: string): void {
    
    query = !query ? 'Trending' : query;
    this.searchQuerySubject.next(query);
  }

  fetchNews(query: string) {
    const apiUrl = `https://newsapi.org/v2/everything?qInTitle=${query}&apiKey=90ff9aabae5a4b21801de6ad145c3d16`; 
    return this.http.get<NewsResponse>(apiUrl);
  }
}
