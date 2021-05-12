import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizzaSlicesComponent } from './pizza-slices.component';

describe('PizzaSlicesComponent', () => {
  let component: PizzaSlicesComponent;
  let fixture: ComponentFixture<PizzaSlicesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PizzaSlicesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PizzaSlicesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
