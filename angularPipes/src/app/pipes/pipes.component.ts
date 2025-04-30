import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  styleUrls: ['./pipes.component.scss'],
  template: `
    <h2>Built-in Angular Pipes Demo</h2>

    <h3>1. Uppercase / Lowercase / Titlecase</h3>
    <p>Original: {{ message }}</p>
    <p>Uppercase: {{ message | uppercase }}</p>
    <p>Lowercase: {{ message | lowercase }}</p>
    <p>Titlecase: {{ message | titlecase }}</p>

    <h3>2. Date Pipe</h3>
    <p>Today (short): {{ today | date:'shortDate' }}</p>
    <p>Today (full): {{ today | date:'fullDate' }}</p>

    <h3>3. Currency Pipe</h3>
    <p>Price: {{ price | currency:'USD' }}</p>

    <h3>4. Percent Pipe</h3>
    <p>Progress: {{ progress | percent:'1.0-2' }}</p>

    <h3>5. Number Pipe</h3>
    <p>Big Number: {{ largeNumber | number }}</p>

    <h3>6. Slice Pipe</h3>
    <p>Slice (0-10): {{ message | slice:0:10 }}</p>

    <h3>7. JSON Pipe</h3>
    <p>{{ user | json }}</p>


  `
})
export class PipesComponent {
  message = 'Pipe Examples';
  today = new Date();
  price = 99.99;
  progress = 0.7234;
  largeNumber = 12345678.9012;
  user = {
    name: 'Angular',
    version: 17,
    active: true
  };
}
