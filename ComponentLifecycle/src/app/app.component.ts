import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'ComponentLifecycle';
  font:number = 20;

  increaseFontSize() {
    this.font += 2;
  }
}
