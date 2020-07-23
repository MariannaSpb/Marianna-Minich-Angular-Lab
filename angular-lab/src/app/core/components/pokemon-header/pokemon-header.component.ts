import { Component, 
  OnInit, 
  Output, 
  EventEmitter, 
  Input,
} from '@angular/core';

import { ViewServiceService } from '../../../pokemon/view-service.service';
//import {SearchComponent } from '../../../pokemon/search/search.component';



@Component({
  selector: 'app-pokemon-header',
  templateUrl: './pokemon-header.component.html',
  styleUrls: ['./pokemon-header.component.css'],
})
export class PokemonHeaderComponent implements OnInit {
  //@Input() style: string;
  //@Output() styleChange = new EventEmitter();
  
  public title = "Pokemons"

  constructor(private view: ViewServiceService) {}

  getStyle() {
    return this.view.style
  }

  public onChangeStyle(): void {
    this.view.changeStyleView()
  }

  ngOnInit(): void {
  }
}
