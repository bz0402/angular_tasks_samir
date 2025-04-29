import { Directive,Input,ElementRef,OnChanges } from '@angular/core';

@Directive({
  selector: '[appLastColor]'
})
export class LastColorDirective implements OnChanges  {

  @Input() appLastColor: string = '';

  constructor(private el: ElementRef) {}

  ngOnChanges() {
    this.el.nativeElement.style.color = this.appLastColor || '#000';
  }

}
