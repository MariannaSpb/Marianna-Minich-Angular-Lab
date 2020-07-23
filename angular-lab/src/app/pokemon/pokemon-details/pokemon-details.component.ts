import { Component, 
  OnInit,
  Input, 
  Output, 
  EventEmitter, 
} from '@angular/core';
import { Pokemon } from '../../pokemon';
import { PokemonService } from '../pokemon-service.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {
  @Input() public pokemon: Pokemon;

  constructor(private pokemonService: PokemonService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      const id = +data.get('id');
      this.getPokemonDetails(id);
    });
  }

  getPokemonDetails(id: number): void {
    this.pokemonService.getById(id).subscribe(pokemon => {
      this.pokemon = pokemon;
    });
  }

  public toggleAction(): void {
    console.log('action', this.pokemon.isCaught)
   
    this.pokemon.isCaught= !this.pokemon.isCaught
    const actionStatus = this.pokemon.isCaught ? 'realised' : 'caught'
    console.log(`Pokemon ${this.pokemon.name} was ${actionStatus}`);
  }
 
}

//Этот компонент просто получает объект pokemon через его свойство pokemon и отображает его.

