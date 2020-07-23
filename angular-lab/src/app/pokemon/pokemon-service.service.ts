import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from './pokemon-list/mock-data';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {


  constructor() { }

  getAll(): Observable<Pokemon[]> {
    return of(POKEMONS);
  }

//   filter(name: string): any {
//    return [...POKEMONS].filter(pokemon => {
//     pokemon.name.toLowerCase().includes(name.toLowerCase())
//     //return [...POKEMONS].filter((pokemon) => pokemon.name.toLowerCase().includes(name.toLowerCase()));
//   })
// }

// filter(name: string): any {
//   return [...POKEMONS].filter(pokemon => pokemon.name.toLowerCase().includes(name.toLowerCase()));
// }

filter(name: string): any {
  return [...POKEMONS].filter(pokemon => pokemon.name.toLowerCase().indexOf(name.toLowerCase()) > -1 ? true : false);
}


  // getById(): any {
  //   POKEMONS.map((item) => {
  //     console.log('this is id number:', item.id)
  //   })
  // }
  getById(id: number): Observable<Pokemon> {
    return of(POKEMONS).pipe(map((pokemons) => pokemons.find((pokemon) => pokemon.id === id)));
  }
}
