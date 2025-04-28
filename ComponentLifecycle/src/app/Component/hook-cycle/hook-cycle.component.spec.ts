import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HookCycleComponent } from './hook-cycle.component';

describe('HookCycleComponent', () => {
  let component: HookCycleComponent;
  let fixture: ComponentFixture<HookCycleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HookCycleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HookCycleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
