import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChallengesRoutingModule } from './challenges-routing.module';
import { ChallengesComponent } from './challenges.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTabsModule } from '@angular/material/tabs';
import { MatToolbarModule } from '@angular/material/toolbar';
import { PizzaSlicesComponent } from './pizza-slices/pizza-slices.component';


@NgModule({
  declarations: [
    ChallengesComponent,
    PizzaSlicesComponent
  ],
  imports: [
    CommonModule,
    ChallengesRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatTabsModule
  ]
})
export class ChallengesModule { }
