import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/Shared/Ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  @Output() exportNewIngredient = new EventEmitter<Ingredient>();
  newIngredientAdded(name, val) {
    console.log('name', name.value);
    console.log('val', val.value);
    let newIng = { name: name.value, amount: val.value };
    this.exportNewIngredient.emit(newIng);
  }
}
