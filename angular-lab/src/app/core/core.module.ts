import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonHeaderComponent } from './components/pokemon-header/pokemon-header.component';
// import { SearchComponent } from './components/search/search.component';
import { PokemonRoutingModule } from '../pokemon-routing.module';



@NgModule({
  declarations: [
    PokemonHeaderComponent,
    //SearchComponent
  ],
  imports: [
    CommonModule,
    PokemonRoutingModule
  ],
  exports: [
    PokemonHeaderComponent,
  ]
})
export class CoreModule { }
