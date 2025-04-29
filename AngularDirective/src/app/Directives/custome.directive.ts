import { Directive, ElementRef, HostListener,Input,Output,EventEmitter } from '@angular/core';

@Directive({
  selector: '[appCustome]'
})
export class CustomeDirective {
  @Input() color: string = '';
  @Output() colorSelected = new EventEmitter<string>();

  @HostListener('click')
  onClick() {
    this.colorSelected.emit(this.color);
  }
  
}
