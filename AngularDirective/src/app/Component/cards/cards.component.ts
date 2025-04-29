import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colors-panel',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss'],
})
export class CardComponent implements OnInit {
  colors: string[] = [];
  selectedColors: string[] = [];

  ngOnInit() {
    this.generateRandomColors();
  }

  generateRandomColors() {
    for (let i = 0; i < 10; i++) {
      this.colors.push(this.getRandomColor());
    }

  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  handleColorClick(color: any) {
    if (!this.selectedColors.includes(color)) {
      this.selectedColors.push(color);
      this.colors = this.colors.filter((c) => c !== color);
      this.colors.push(this.getRandomColor())
    }
  }

  clearColors(){
    this.selectedColors = [];
  }
}
