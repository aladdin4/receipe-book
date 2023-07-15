import { Component } from '@angular/core';
import { RecipeType } from 'src/app/Shared/recipe.model';
import { RecipeService } from 'src/app/services/recipeService/recipe-service.service';

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent {
  constructor(private recipeService: RecipeService) {}
  addNewRecipe() {
    this.recipeService.AddRecipe();
  }
}
