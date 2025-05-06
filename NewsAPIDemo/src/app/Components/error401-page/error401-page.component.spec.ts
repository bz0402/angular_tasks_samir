import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Error401PageComponent } from './error401-page.component';

describe('Error401PageComponent', () => {
  let component: Error401PageComponent;
  let fixture: ComponentFixture<Error401PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Error401PageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Error401PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
