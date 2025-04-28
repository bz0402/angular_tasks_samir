import { 
  Component, OnInit, OnChanges, DoCheck, 
  AfterContentInit, AfterContentChecked, 
  AfterViewInit, AfterViewChecked, OnDestroy, Input, 
  SimpleChanges
} from '@angular/core';

@Component({
  selector: 'app-hook-cycle',
  templateUrl: './hook-cycle.component.html',
  styleUrls: ['./hook-cycle.component.scss']
})
export class HookCycleComponent implements 
  OnInit, OnChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  @Input() fontSize: number = 0;

  constructor() {
    console.log('Constructor called');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called');
    console.log('Changes:', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component called');
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called');
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy called');
  }

  increaseFontSize() {
    this.fontSize += 2;
  }

  decreaseFontSize() {
    this.fontSize -= 2;
  }
}
