import { Component, Input, OnInit } from '@angular/core';
import { Ingredient } from 'src/app/Shared/Ingredient.model';
import { RecipeType } from '../../../Shared/recipe.model';
import { RecipeService } from 'src/app/services/recipeService/recipe-service.service';
import { ShoppinglistService } from 'src/app/services/shoppinhlistService/shoppinglist.service';
import { ActivatedRoute } from '@angular/router';
import { Observable, Subscription, interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent implements OnInit {
  recipe: RecipeType;
  currentRecipeSubscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private shoppinglistService: ShoppinglistService,
    private route: ActivatedRoute
  ) {
    this.currentRecipeSubscription =
      this.recipeService.activatedRecipeSubject.subscribe((recipe) => {
        this.recipe = recipe;
      });
  }
  ngOnInit(): void {
    this.route.params.subscribe((param) => {
      this.recipeService.SetCurrentRecipe(param.id);
    });
  }

  ngOnDestroy(): void {
    this.currentRecipeSubscription.unsubscribe();
  }
  addToShoppingList() {
    this.shoppinglistService.addIngredientsToShoppingList(
      this.recipe.ingredients
    );
  }
  deleteRecipe() {
    this.recipeService.deleteRecipe(this.recipe.id);
  }
}
