import { Component, OnInit } from '@angular/core';

import {Hero} from '../hero' //interface import
import {HeroService} from '../hero.service' //hero services import
import {MessageService} from '../message.service'// message service import

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  //properties
  heroes: Hero[];
  selectedHero: Hero;

  //dependency injection
  constructor(private heroService: HeroService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero: Hero): void{
    this.selectedHero = hero;
    this.messageService.add(`HeroService: Selected hero id=${hero.id}`)
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

}
