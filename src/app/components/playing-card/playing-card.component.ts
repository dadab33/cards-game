import { Component, input, Input, InputSignal } from '@angular/core';
import { Monster } from '../../models/monster.model';
import { ValueChangeEvent } from '@angular/forms';

@Component({
  selector: 'app-playing-card',
  imports: [],
  templateUrl: './playing-card.component.html',
  styleUrl: './playing-card.component.css'
})
export class PlayingCardComponent {
  /*@Input({
    //required: true,
    alias: 'my-monster',
    transform: (value: Monster) => {
      value.hp /= 2;
      return value;
    }
  })
  monster: Monster = new Monster();  
  */
 //monster: InputSignal<Monster> = input(new Monster());
 monster: InputSignal<Monster> = input.required({
   alias: 'my-monster',
   transform: (value: Monster) => {
    value.hp *= 2;
    return value;
   }
 }
 );
 
}
