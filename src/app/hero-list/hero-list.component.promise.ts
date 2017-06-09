import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroServicePromiseService } from '../hero.service.promise.service';

@Component({
  selector: 'app-hero-list-promise',
  templateUrl: './hero-list.component.promise.html',
  styleUrls: ['./hero-list.component.promise.css'],
  providers: [HeroServicePromiseService]
})

export class HeroListPromiseComponent implements OnInit {
  errorMessage: string;
  heroes: Hero[];
  mode = 'Promise';

  constructor(private heroService: HeroServicePromiseService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(
                                  heroes => this.heroes = heroes,
                                  error => this.errorMessage = <any>error);
  }

  createHero(name: string) {
    if (!name) { return; }
    this.heroService.create(name).then(
                                  hero => this.heroes.push(hero),
                                  error => this.errorMessage = <any>error);
  }

}
