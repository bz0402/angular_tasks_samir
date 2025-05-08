// news.component.ts
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged, filter, switchMap } from 'rxjs';
import { APICallService } from 'src/app/services/apicall.service';
import { NewsArticle, NewsResponse } from 'src/app/models/news.model';


@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
  searchQuery = '';
  searchSubject = new Subject<string>();
  newsData: NewsArticle[] = [];
  loading = false;
  startTime = 0;
  endTime = 0;
  timeTaken = 0;
  totalResults = 0;

  constructor(
    private apiCallService: APICallService,
    private router: Router
  ) {}

  ngOnInit(): void {
    const formData = JSON.parse(localStorage.getItem('formData') || '[]');
    const isLoggedIn = formData.some((user: any) => user.isLoggedIn === true);
    if (!isLoggedIn) {
      this.router.navigate(['/error401Page']);
    }

    this.searchSubject.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      filter(query => query.trim() !== ''),
      switchMap(query => {
        this.loading = true;
        this.startTime = performance.now();
        this.newsData = [];
        return this.apiCallService.fetchNews(query);
      })
    ).subscribe(
      (data: NewsResponse) => {
        this.newsData = data.articles;
        this.totalResults = this.newsData.length;
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
    this.searchSubject.next(query);
  }
}
