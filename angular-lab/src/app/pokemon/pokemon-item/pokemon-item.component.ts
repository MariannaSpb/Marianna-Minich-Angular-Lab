import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { Pokemon, PokemonWithAction } from '../../pokemon';


@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.css']
})

export class PokemonItemComponent implements OnInit {
  @Input() public pokemon: Pokemon; //получаем объект покемона из родителя
  @Input() public style: string;
  @Output() public actionValue = new EventEmitter() //будем передавать родителю инфу о том, что нужно сделать с дочерним комп-ом

  isbordered:boolean = false;
  damageLevel = 50


  checkDamage() {
    this.pokemon.damage > this.damageLevel ? this.isbordered = true : this.isbordered
  }


  ngOnInit(): void {
    this.checkDamage();
  }

  onClickHandler(action): void {
  this.pokemon.isCaught = !this.pokemon.isCaught
  this.actionValue.emit(this.pokemon)
  }
}
