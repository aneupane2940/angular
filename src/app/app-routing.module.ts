import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ResultComponent }      from './grid.search.result.component';
import { DashboardComponent }   from './dashboard.component';
import { HeroesComponent }      from './heroes.component';
import { HeroDetailComponent }  from './hero-detail.component';
import { MyTestingComponent }   from './my.testing.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'dashboard',  component: MyTestingComponent },
  { path: 'mytesting',  component: MyTestingComponent },
  { path: 'searchresult/:searchresult',  component: ResultComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
