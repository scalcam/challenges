import { Component, OnInit } from '@angular/core';
import { HungryPerson } from 'src/app/interfaces/hungry-person';

@Component({
    selector: 'app-pizza-slices',
    templateUrl: './pizza-slices.component.html',
    styleUrls: ['./pizza-slices.component.css']
})
export class PizzaSlicesComponent implements OnInit {

    public hungryPeople: HungryPerson[];

    constructor() { }

    ngOnInit(): void {
    }

    public howManyPizzas(attendees: HungryPerson[], slicesPerPizza: number): number {
        let totalSlices: number = 0;

        attendees.forEach(person => {
            totalSlices += person.desiredSlices;
        });

        return Math.ceil(totalSlices/slicesPerPizza);
    }
}
