import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  currentRecipe: {
    name: string;
    path: string;
    description: string;
    ingredients: string[];
  };
  addRecipe(recipe) {
    this.currentRecipe = recipe;
  }
}
