import { Component } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent {
  newsData: any[] = [];
  visibleNews: any[] = [];
  loading = false;
  showLoadMore = false;
  startTime: number = 0;
  endTime: number = 0;
  timeTaken: number = 0;
  totalResults: number = 0;
  currentPage = 0;
  pageSize = 15;
searchQuery: string = '';

  searchNews() {
    const query = (document.getElementById('search') as HTMLInputElement).value;
    if (!query.trim()) return alert('Please enter a search term');
    this.newsData = [];
    this.visibleNews = [];
    this.loading = true;
    this.startTime = performance.now();
    this.fetchNews(query);
  }

  fetchNews(query: string) {
    const apiUrl = `https://newsapi.org/v2/everything?q=${query}&apiKey=90ff9aabae5a4b21801de6ad145c3d16`;

    const observable = new Observable(observer => {
      fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
          observer.next(data);
          observer.complete();
        })
        .catch(err => observer.error(err));
    });

    observable.subscribe({
      next: (data: any) => {
        this.newsData = data.articles;
        this.totalResults = this.newsData.length;
        this.currentPage = 0;
        this.loadMore();
        this.endTime = performance.now();
        this.timeTaken = ((this.endTime - this.startTime) / 1000);
        this.showLoadMore = this.newsData.length > this.pageSize;
      },
      error: () => this.loading = false,
      complete: () => this.loading = false
    });

    
  }

  loadMore() {
    const start = this.currentPage * this.pageSize;
    const end = start + this.pageSize;
    this.visibleNews = [...this.visibleNews, ...this.newsData.slice(start, end)];
    this.currentPage++;
    this.showLoadMore = this.newsData.length > this.visibleNews.length;
  }
}
