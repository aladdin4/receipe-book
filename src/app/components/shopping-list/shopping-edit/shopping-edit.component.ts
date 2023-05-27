import { Component, EventEmitter, Output } from '@angular/core';
import { Ingredient } from 'src/app/Shared/Ingredient.model';
import { ShoppinglistService } from 'src/app/services/shoppinhlistService/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  constructor(private shoppinglistService: ShoppinglistService) {}
  newIngredientAdded(name, val) {
    let newIng: Ingredient = { name: name.value, amount: val.value };
    this.shoppinglistService.addNewIngredient(newIng);
  }
}
