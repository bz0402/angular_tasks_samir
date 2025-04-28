import { Component, Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})

export class ChildComponent {

  @Input() messageFromParent: string = 'Default Message';
  @Output() messageToParent = new EventEmitter<string>();

  MarkedAsRead() {
    this.messageFromParent = '';
    this.messageToParent.emit();
  }
  }
 

