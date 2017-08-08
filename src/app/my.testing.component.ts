import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
  selector: 'my-testing',
  templateUrl: './my-testing.component.html',
  styleUrls: [ './my.testing.component.css' ]
})
export class MyTestingComponent implements OnInit {

  heroes: Hero[] = [];

  constructor(private heroService: HeroService ,
  private router: Router) { }

  ngOnInit(): void {
    this.heroService.getHeroes()
      .then(heroes => this.heroes = heroes);
  }
   gotoDetail(): void {
    this.router.navigate(['/searchresult', 19]);
  }
}
