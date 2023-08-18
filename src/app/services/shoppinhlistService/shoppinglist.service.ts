import { Injectable } from '@angular/core';
import { Ingredient } from 'src/app/Shared/Ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppinglistService {
  constructor() {}

  Ingredients: Ingredient[] = [];

  addNewIngredient(ingredient) {
    this.Ingredients.push(ingredient);
  }
  addNewIngredientList(ingredientList: Ingredient[]) {
    this.Ingredients.push(...ingredientList);
  }
}
