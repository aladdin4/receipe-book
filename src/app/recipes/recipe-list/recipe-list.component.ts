import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { RecipeType } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  Recipes: RecipeType[] = [];

  @Output() setCurrentRecipe = new EventEmitter<RecipeType>();

  fixedRecipe = {
    name: 'test recipe',
    description: "our first recipe, it's hardcoded",
    imagePath:
      'https://i0.hippopx.com/photos/891/700/843/asparagus-italy-piemonte-piedmont-preview.jpg',
    ingredients: ['tomatos (10)', 'potatoes (15)', 'meat (5kg)'],
  };

  fixedRecipe2 = {
    name: 'test recipe2',
    description: "our 2nd recipe, it's hardcoded",
    imagePath:
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY2lwZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    ingredients: ['fruits (10)', 'cheese (15)', 'chiken (5kg)'],
  };

  addRecipe() {
    console.log('clicked');
    if (this.Recipes.length % 2) {
      this.Recipes.push(this.fixedRecipe);
    } else {
      this.Recipes.push(this.fixedRecipe2);
    }
  }

  passRecipeToParent(recipeClicked) {
    this.setCurrentRecipe.emit(recipeClicked);
  }
}
