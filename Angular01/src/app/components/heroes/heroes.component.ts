import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

export interface Hero{
  id: number;
  name: string;

}


@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})


export class HeroesComponent implements OnInit {

  hero:Hero[] = [
    {
      id: 1,
      name: 'Saitama'
    },
    {
      id: 2,
      name: 'Goku'
    },
    {
      id: 3,
      name: 'Levi'
    },
    {
      id: 4,
      name: 'SuperMan'
    },
    {
      id: 5,
      name: 'BatMan'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }



  onClickNameHero(hero: Hero): void{

     alert(hero.name)

  }

}
