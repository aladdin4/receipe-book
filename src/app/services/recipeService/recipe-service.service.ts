import { EventEmitter, Injectable } from '@angular/core';
import { RecipeType } from 'src/app/Shared/recipe.model';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  //main data and current recipe displayed. (supposed to be from back end)
  constructor() {}

  //our to fixed recipes that we base every thing on
  fixedRecipe: RecipeType = {
    id: 0,
    name: 'test recipe',
    description: "our first recipe, it's hardcoded",
    imagePath:
      'https://i0.hippopx.com/photos/891/700/843/asparagus-italy-piemonte-piedmont-preview.jpg',
    ingredients: ['tomatos (10)', 'potatoes (15)', 'meat (5kg)'],
  };

  fixedRecipe2: RecipeType = {
    id: 0,
    name: 'test recipe2',
    description: "our 2nd recipe, it's hardcoded",
    imagePath:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY2lwZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    ingredients: ['fruits (10)', 'cheese (15)', 'chiken (5kg)'],
  };

  Recipes: RecipeType[] = [];
  AddRecipe() {
    if (this.Recipes.length % 2) {
      this.Recipes.push({ ...this.fixedRecipe });
      this.Recipes[this.Recipes.length - 1].id = this.Recipes.length;
    } else {
      this.Recipes.push({ ...this.fixedRecipe2 });
      this.Recipes[this.Recipes.length - 1].id = this.Recipes.length;
    }
  }
  RecipeChanged: EventEmitter<RecipeType> = new EventEmitter();
  //emit to activate observable
  GetRecipe(id) {
    this.Recipes.forEach((recipe) => {
      if (recipe.id == id) {
        this.RecipeChanged.emit(recipe);
      }
    });
  }
}
