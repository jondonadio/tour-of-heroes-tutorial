import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from 'src/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
  constructor() {}
  selectedHero?: Hero;
  heroes = HEROES;

  ngOnInit(): void {}
}
