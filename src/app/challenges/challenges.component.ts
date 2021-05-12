import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
    selector: 'app-challenges',
    templateUrl: './challenges.component.html',
    styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {

    background: ThemePalette = 'primary';
    tabLoadTimes: Date[] = [];

    constructor() { }

    public ngOnInit(): void {
    }

    public getTimeLoaded(index: number): Date {
        if (!this.tabLoadTimes[index]) {
            this.tabLoadTimes[index] = new Date();
        }

        return this.tabLoadTimes[index];
    }
}
