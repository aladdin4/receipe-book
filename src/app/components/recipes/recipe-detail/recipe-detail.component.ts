import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/Shared/Ingredient.model';
import { RecipeType } from '../../../Shared/recipe.model';
import { RecipeService } from 'src/app/services/recipeService/recipe-service.service';
import { ShoppinglistService } from 'src/app/services/shoppinhlistService/shoppinglist.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription, interval, map, tap } from 'rxjs';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  recipe: RecipeType;
  recipeListSubscription: Subscription;
  constructor(
    private recipeService: RecipeService,
    private shoppinglistService: ShoppinglistService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    route.params.subscribe((param) => {
      recipeService.GetRecipe(Number(param.id));
    });

    if (this.recipe == null) {
      router.navigate(['/recipes/0']);
    }
  }
  ngOnInit(): void {
    this.recipeListSubscription = this.recipeService.RecipeChanged.subscribe(
      (selectedRecipe) => {
        this.recipe = selectedRecipe;
      }
    );
  }

  ngOnDestroy(): void {
    this.recipeListSubscription.unsubscribe();
  }
  addToShoppingList() {
    this.shoppinglistService.addNewIngredientList(this.recipe.ingredients);
  }
}
