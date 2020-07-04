import { Component, OnInit, Input } from '@angular/core';
import { Pokemon } from '../../pokemon';
import { PokemonService } from '../pokemon-service.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {
  @Input() public pokemon: Pokemon;
  @Input() style: string;

  pokemonsList: Pokemon[]
  
  constructor(private pokemonService: PokemonService) { } //тут логика получения покемонов
  
  getData(): void {
    this.pokemonService.getPokemons()
        .subscribe(pokemonsList => this.pokemonsList = pokemonsList);
  }

  ngOnInit(): void {
    this.getData();
  }

  getAction(obj) {
  const actionStatus = obj.action ? 'caught' : 'realised'
  console.log(`Pockemon ${obj.name} was ${actionStatus}`);
  }

}
