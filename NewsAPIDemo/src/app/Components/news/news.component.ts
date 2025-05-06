import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { NewsResponse } from 'src/app/models/news.model';
import { NewsArticle } from '../../models/news.model';
import { NewsService } from 'src/app/services/News.Service';
import { Router } from '@angular/router';

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

  constructor(private http: HttpClient,private newsService:NewsService,private router:Router) {}
  ngOnInit() {
    const formData = JSON.parse(localStorage.getItem('formData') || '[]');
    const isLoggedIn = formData.some((user: any) => user.isLoggedIn === true);
    if (!isLoggedIn) {
      this.router.navigate(['/error401Page']);
    }
  }

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
    const apiUrl = `https://newsapi.org/v2/everything?qInTitle=${query}&apiKey=90ff9aabae5a4b21801de6ad145c3d16`;

    this.http.get<NewsResponse>(apiUrl).subscribe(
      data => {
        this.newsData = data.articles;
        this.totalResults = this.newsData.length;
        this.visibleNews = this.newsData.slice(this.currentPage, this.currentPage + this.pageSize);
        this.endTime = performance.now();  
        this.timeTaken = (this.endTime - this.startTime) / 1000;  
        this.loading = false;  
      },
      error => {
        console.error('Error fetching news:', error);
        this.loading = false; 
      }
    );
  }
}
