import { Injectable } from '@angular/core';
import { RecipeType } from 'src/app/Shared/recipe.model';
import { ShoppinglistService } from '../shoppinhlistService/shoppinglist.service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  //main data and current recipe displayed. (supposed to be from back end)
  //our to fixed recipes that we base every thing on
  fixedRecipe: RecipeType = {
    id: 0,
    name: 'test recipe',
    description: "our first recipe, it's hardcoded",
    imagePath:
      'https://i0.hippopx.com/photos/891/700/843/asparagus-italy-piemonte-piedmont-preview.jpg',
    ingredients: [
      { name: 'tomatos', amount: 10 },
      { name: 'potatoes', amount: 15 },
      { name: 'meat', amount: 5 },
    ],
  };

  fixedRecipe2: RecipeType = {
    id: 0,
    name: 'test recipe2',
    description: "our 2nd recipe, it's hardcoded",
    imagePath:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY2lwZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    ingredients: [
      { name: 'fruits', amount: 10 },
      { name: 'cheese', amount: 15 },
      { name: 'chiken', amount: 5 },
    ],
  };

  recipeListSubject = new Subject<RecipeType[]>();
  activatedRecipeSubject = new Subject<RecipeType>();

  Recipes: RecipeType[] = [];
  AddRecipe(recipe: RecipeType) {
    recipe.id = this.Recipes.length + 1;
    this.Recipes.push(recipe);
    this.recipeListSubject.next(this.Recipes);
  }

  SetCurrentRecipe(id) {
    this.Recipes.forEach((recipe) => {
      if (recipe.id == id) {
        this.activatedRecipeSubject.next(recipe);
      }
    });
  }
}
