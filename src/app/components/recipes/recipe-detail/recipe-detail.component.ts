import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/Shared/Ingredient.model';
import { RecipeType } from '../../../Shared/recipe.model';
import { RecipeService } from 'src/app/services/recipeService/recipe-service.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  recipe: RecipeType;

  constructor(private recipeService: RecipeService) {
    //subscribe for observale
    this.recipeService.RecipeChanged.subscribe((selectedRecipe) => {
      this.recipe = selectedRecipe;
    });
  }
}
