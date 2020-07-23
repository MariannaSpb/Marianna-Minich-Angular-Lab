import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonItemComponent } from './pokemon-item/pokemon-item.component';
//import { PokemonHeaderComponent } from './pokemon-header/pokemon-header.component';
import { SearchComponent } from './search/search.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { PokemonRoutingModule } from '../pokemon-routing.module';



@NgModule({
  declarations: [
    PokemonListComponent, 
    PokemonItemComponent, 
    //PokemonHeaderComponent,
    SearchComponent,
    PokemonDetailsComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    FormsModule
  ],
  exports: [
    //PokemonHeaderComponent,
    PokemonListComponent, 
    PokemonItemComponent,
    PokemonDetailsComponent,
    SearchComponent
    
  ]
})
export class PokemonModule { }
