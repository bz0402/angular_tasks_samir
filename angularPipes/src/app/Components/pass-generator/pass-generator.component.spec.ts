import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PassGeneratorComponent } from './pass-generator.component';

describe('PassGeneratorComponent', () => {
  let component: PassGeneratorComponent;
  let fixture: ComponentFixture<PassGeneratorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PassGeneratorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PassGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
