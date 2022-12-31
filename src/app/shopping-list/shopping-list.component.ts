import { Component } from '@angular/core';
import { Ingredient } from '../Shared/Ingredient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  Ingredients: Ingredient[] = [
    new Ingredient('tomatos', 5),
    new Ingredient('potatoes', 15),
    new Ingredient('carrots', 25),
  ];
}
