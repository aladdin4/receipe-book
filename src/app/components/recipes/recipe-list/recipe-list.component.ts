import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { RecipeType } from '../../../Shared/recipe.model';
import { RecipeService } from 'src/app/services/recipeService/recipe-service.service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  constructor(private recipeService: RecipeService) {}
  Recipes: RecipeType[] = this.recipeService.Recipes;
}
