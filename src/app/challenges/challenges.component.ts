import { Component, OnInit } from '@angular/core';
import { ThemePalette } from '@angular/material/core';

@Component({
  selector: 'app-challenges',
  templateUrl: './challenges.component.html',
  styleUrls: ['./challenges.component.css']
})
export class ChallengesComponent implements OnInit {
  links = ['First', 'Second', 'Third'];
  activeLink = this.links[0];
  background: ThemePalette = 'primary';
  tabLoadTimes: Date[] = [];

  constructor() { }

  ngOnInit(): void {
  }

  getTimeLoaded(index: number) {
      if (!this.tabLoadTimes[index]) {
          this.tabLoadTimes[index] = new Date();
      }

      return this.tabLoadTimes[index];
  }
}
