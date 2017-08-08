import 'rxjs/add/operator/switchMap';
import { Component, OnInit }        from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location }                 from '@angular/common';
import { Router } from '@angular/router';

import { Hero }         from './hero';
import { HeroService }  from './hero.service';
@Component({
  selector: 'result-detail',
  templateUrl: './grid.search.result.component.html',
  styleUrls: [ './hero-detail.component.css' ]
})
export class ResultComponent implements OnInit {
  hero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.heroService.getHero(+params.get('id')))
      .subscribe(hero => this.hero = hero);
  }

   gotoDetail(): void {
    this.router.navigate(['/gridresult', 'Magma']);
  }

  goBack(): void {
    this.location.back();
  }
}
