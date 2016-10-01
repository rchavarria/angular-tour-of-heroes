import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Hero } from './hero';
import { HeroService } from './hero.service';
import { HeroDetailComponent } from './hero-detail.component';

@Component({
    moduleId: module.id,
    selector: 'my-heroes',
    stylesUrls: [ 'heroes.component.css' ],
    templateUrl: 'heroes.component.html'
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];
  selectedHero: Hero;

  constructor(
    private router: Router,
    private heroService: HeroService
  ) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .then(h => this.heroes = h);
  }

  gotoDetail(): void {
    let link = [ '/detail', this.selectedHero.id ];
    this.router.navigate(link);
  }

}

