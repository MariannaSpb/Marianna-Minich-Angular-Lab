import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from './pokemon-list/mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  constructor() { }

  getAll(): Observable<Pokemon[]> {
    return of(POKEMONS);
  }

  filter(): any {
   return [...POKEMONS].sort((a, b): any => {
    return a.name.localeCompare(b.name);
  })

  }

  getById(): any {
    POKEMONS.map((item) => {
      console.log('this is id number:', item.id)
    })
  }
}
