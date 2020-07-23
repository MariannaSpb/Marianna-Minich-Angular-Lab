import { Component, 
  OnInit, 
  Input
} from '@angular/core';
import { Pokemon } from '../../pokemon';
import { PokemonService } from '../pokemon-service.service';
import { ViewServiceService } from '../view-service.service';

import { 
  Router, 
  ActivatedRoute 
} from '@angular/router';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
 
  pokemonsList: Pokemon[]

  constructor(private pokemonService: PokemonService,
    private view: ViewServiceService,
    private activateRoute: ActivatedRoute, 
    private router: Router
    ) { }


  get styleView(): string {
    return this.view.style;
  }




  ngOnInit(): void {
    this.activateRoute.queryParamMap.subscribe(queryParams => {
      const pokemonName = queryParams.get('pokemonName');
      console.log('pokname', pokemonName)
      if (pokemonName) {
        this.pokemonsList = this.pokemonService.filter(pokemonName);
        return;
      }
      else this.getData();
    });
    
  }

  //Класс ActivatedRoute имеет свойство queryParams, 
  //которое возвращает наблюдаемые параметры запроса, доступные в текущем URL.
//queryParamMap возвращает обзервебел с объектом

  getData(): void {
    this.pokemonService.getAll()
        .subscribe(pokemonsList => this.pokemonsList = pokemonsList);
  }

 
  getAction(obj) {
  obj.isCaught = !obj.isCaught
  const actionStatus = obj.isCaught ? 'realised' : 'caught'
  console.log(`Pokemon ${obj.name} was ${actionStatus}`);
  }

  public onSearch(data: string):void {
   console.log('data', data)
   this.router.navigate([], { queryParams: data ? { pokemonName: data } : {} });
  }

} 
