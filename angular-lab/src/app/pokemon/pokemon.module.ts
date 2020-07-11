import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { SearchComponent } from './search/search.component';



@NgModule({
  declarations: [
    PokemonListComponent, 
    PokemonItemComponent, 
    PokemonHeaderComponent, SearchComponent],
  imports: [
    CommonModule
  ],
  exports: [
    PokemonHeaderComponent,
    PokemonListComponent, 
    PokemonItemComponent,
  ]
})
export class PokemonModule { }
