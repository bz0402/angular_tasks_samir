import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  template:`
  <h1>Simple Interceptor Demo</h1>
  <button (click)="makeApiCall()">Make API Call</button>
  `,
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  makeApiCall() {
    const apiUrl = `https://newsapi.org/v2/everything?qInTitle=Trending&apiKey=90ff9aabae5a4b21801de6ad145c3d16`;

    this.http.get(apiUrl)
      .subscribe(data => {
       return data;
      });
  }
}
