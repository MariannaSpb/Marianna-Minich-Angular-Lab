import { Injectable } from '@angular/core';
import { Pokemon } from '../pokemon';
import { POKEMONS } from './pokemon-list/mock-data';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor() { }

  getPokemons(): Observable<Pokemon[]> {
    return of(POKEMONS);
  }
}
