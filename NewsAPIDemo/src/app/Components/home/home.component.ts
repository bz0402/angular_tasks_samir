import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { ROUTER_CONFIGURATION } from '@angular/router';
import { of } from 'rxjs';
import { NewsArticle, NewsResponse } from 'src/app/models/news.model';
import { NewsService } from '../../services/News.Service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent {

  newses: any[] = [];

    constructor(private http: HttpClient,private newsService:NewsService) {}
  
    ngOnInit(): void {
      this.makeApiCall();
    }
  
    makeApiCall() {
      const apiUrl = `https://newsapi.org/v2/top-headlines?apiKey=90ff9aabae5a4b21801de6ad145c3d16&country=us`;
      return this.http.get<NewsResponse>(apiUrl).subscribe(
        data => {
          this.newses = data.articles;
        },
        error => {
          console.error('Error fetching news:', error);
        }
      );



    }
  
}
