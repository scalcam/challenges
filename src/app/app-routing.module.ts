import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { MainPageComponent } from './main-page/main-page.component';
import { ChallengesPageComponent } from './challenges-page/challenges-page.component';

const routes: Routes = [
    {
        path: '',
        component: MainPageComponent
    },
    {
        path: 'challenges',
        component: ChallengesPageComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
