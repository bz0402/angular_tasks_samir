import { Component, Input } from '@angular/core';
import { NewsResponse } from 'src/app/models/news.model';
import { APICallService } from 'src/app/services/apicall.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: false,
})
export class HomeComponent {

  newses: any[] = [];

    constructor(private apiservice:APICallService) {}
  
    ngOnInit(): void {
      this.makeApiCall();
    }
  
    makeApiCall() {
      this.apiservice.fetchNews('New').subscribe(
        (response: NewsResponse) => {
          this.newses = response.articles;
        },
        (error) => {
          console.error('Error fetching news:', error);
        }
      );
    }
  
}
