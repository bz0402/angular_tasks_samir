import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-news-card',
  templateUrl: './news-card.component.html',
  styleUrls: ['./news-card.component.scss']
})
export class NewsCardComponent  {

  searchquery: string = '';
  SearchData(search: any) 
  {
    this.searchquery = search;
    
  }
  @Input() news: any;
}
