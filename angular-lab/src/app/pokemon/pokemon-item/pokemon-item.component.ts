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
  @Output() public actionValue = new EventEmitter(); //будем передавать родителю инфу о том, что нужно сделать с дочерним комп-ом

  isbordered = false;
  damageLevel = 50

  checkDamage() {
    this.pokemon.damage > this.damageLevel ? this.isbordered = true : this.isbordered
  }


  ngOnInit(): void {
    this.checkDamage();
  }

  onClickHandler(event): void {
    const action: boolean = event.target.classList.contains('pokemon__button--catch')  ?  true : false;
    const PokemonWithAction: PokemonWithAction = {
      name: this.pokemon.name,
      action: action
    }
    this.actionValue.emit(PokemonWithAction);
  }
}
