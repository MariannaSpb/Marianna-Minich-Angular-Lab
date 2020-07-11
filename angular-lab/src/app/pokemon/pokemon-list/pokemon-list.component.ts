import { Component, 
  OnInit, 
  Input,
} from '@angular/core';
import { Pokemon } from '../../pokemon';
import { PokemonService } from '../pokemon-service.service';


@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css'],
})
export class PokemonListComponent implements OnInit {
  @Input() public pokemon: Pokemon;
  @Input() style: string;

  pokemonsList: Pokemon[]

  constructor(private pokemonService: PokemonService) { }

  getData(): void {
    this.pokemonService.getAll()
        .subscribe(pokemonsList => this.pokemonsList = pokemonsList);
  }

  getIdValue() {
    this.pokemonService.getById()
  }

  filter() {
    console.log('filt', this.pokemonService.filter())
    this.pokemonService.filter();
    
  }

  ngOnInit(): void {
    this.filter();
    this.getData();
    this.getIdValue();
  }

 
  getAction(obj) {
  obj.isCaught = !obj.isCaught
  const actionStatus = obj.isCaught ? 'realised' : 'caught'
  console.log(`Pokemon ${obj.name} was ${actionStatus}`);
  }

} 
