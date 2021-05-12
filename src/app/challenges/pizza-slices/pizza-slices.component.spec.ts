import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HungryPerson } from 'src/app/interfaces/hungry-person';

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

  it('should return correct number of pies given the number of slices a pie can be and number of slices people want', () => {
    const people: HungryPerson[] = [
      { name: 'Joe', desiredSlices: 9 },
      { name: 'Cami', desiredSlices: 3 },
      { name: 'Cassidy', desiredSlices: 4 }
    ]
    expect(component.howManyPizzas(people, 8)).toBe(2);
  });
});
