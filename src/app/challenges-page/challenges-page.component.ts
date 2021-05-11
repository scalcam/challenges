import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
    selector: 'app-challenges-page',
    templateUrl: './challenges-page.component.html',
    styleUrls: ['./challenges-page.component.css']
})
export class ChallengesPageComponent implements OnInit {
    links = ['First', 'Second', 'Third'];
    activeLink = this.links[0];
    background: ThemePalette = 'primary';

    constructor() { }

    ngOnInit(): void {
    }

}
