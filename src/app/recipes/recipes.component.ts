import { Component } from '@angular/core';
import { RecipeType } from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  currentRecipe: RecipeType;
  addRecipe(recipe) {
    this.currentRecipe = recipe;
  }
}
