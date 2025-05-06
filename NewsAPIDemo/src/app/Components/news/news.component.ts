import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { APICallService } from 'src/app/services/apicall.service';  
import { NewsArticle } from 'src/app/models/news.model';  
import { NewsResponse } from 'src/app/models/news.model';  
import { debounceTime, distinctUntilChanged, Subject } from 'rxjs';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  newsData: NewsArticle[] = [];
  visibleNews: any[] = [];
  loading = false;
  startTime: number = 0;
  endTime: number = 0;
  timeTaken: number = 0;
  totalResults: number = 0;
  currentPage = 0;
  pageSize = 15;
  searchQuery: string = '';  
  private searchSubject = new Subject<string>();  

  constructor(
    private apiCallService: APICallService,  
    private router: Router
  ) {}

  ngOnInit():void {
    this.apiCallService.searchQuery$.subscribe(query => {
      this.searchQuery = query;
      if (this.searchQuery.trim()) {
        this.searchNews();
      }    
  });
   
 
    const formData = JSON.parse(localStorage.getItem('formData') || '[]');
    const isLoggedIn = formData.some((user: any) => user.isLoggedIn === true);
    if (!isLoggedIn) {
      this.router.navigate(['/error401Page']);
    }
  }
  searchNews() {
    if (!this.searchQuery.trim()) return alert('Please enter a search term');
    this.newsData = [];
    this.visibleNews = [];
    this.loading = true;
    this.startTime = performance.now();
    this.fetchNews(this.searchQuery);
  }
  fetchNews(query: string) {
    this.apiCallService.fetchNews(query).subscribe(
      (data: NewsResponse) => {
        this.newsData = data.articles;
        this.totalResults = this.newsData.length;
        this.visibleNews = this.newsData.slice(this.currentPage, this.currentPage + this.pageSize);
        this.endTime = performance.now();
        this.timeTaken = (this.endTime - this.startTime) / 1000;
        this.loading = false;
      },
      (error) => {
        console.error('Error fetching news:', error);
        this.loading = false;
      }
    );
  }
  onSearchInputChange(event: any) {
    const query = event.target.value;
    this.apiCallService.setSearchQuery(query); 
  }
}
