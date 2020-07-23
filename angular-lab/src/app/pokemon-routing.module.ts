import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PokemonListComponent } from './pokemon/pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon/pokemon-details/pokemon-details.component';

const routes: Routes = [
 { path: '', redirectTo: '/pokemons', pathMatch: 'full' },
  {path: 'pokemons', component: PokemonListComponent},
  { path: 'detail/:id', component: PokemonDetailsComponent },
];

@NgModule({
  // declarations: [],
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule],
})
export class PokemonRoutingModule { }
