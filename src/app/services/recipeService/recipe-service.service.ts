import { Injectable } from '@angular/core';
import { RecipeType } from 'src/app/Shared/recipe.model';
import { ShoppinglistService } from '../shoppinhlistService/shoppinglist.service';
import { Subject, map } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class RecipeService {
  constructor(private http: HttpClient) {}
  Recipes: RecipeType[] = [];

  recipeListSubject = new Subject<RecipeType[]>();
  activatedRecipeSubject = new Subject<RecipeType>();

  getRecipes() {
    this.Recipes = [];
    this.http
      .get('https://food-store-3ea3e-default-rtdb.firebaseio.com/recipes.json')
      .pipe(
        map((recipes) => {
          if (!recipes) return [];
          for (let recipe of recipes as RecipeType[]) {
            this.Recipes.push(recipe);
          }
        })
      )
      .subscribe((recipes) => {
        this.recipeListSubject.next(this.Recipes);
      });
  }
  SaveRecipe(recipe: any) {
    var itemIndex = this.Recipes.findIndex((r) => r.id == recipe.id);
    if (itemIndex > -1) {
      this.Recipes[itemIndex] = recipe;
    } else {
      if (this.Recipes.length > 0) {
        recipe.id = this.Recipes[this.Recipes.length - 1].id + 1;
      } else {
        recipe.id = 1;
      }

      this.Recipes.push(recipe);
    }

    this.http
      .put(
        'https://food-store-3ea3e-default-rtdb.firebaseio.com/recipes.json',
        this.Recipes
      )
      .subscribe((recipe) => {
        this.getRecipes();
      });
  }

  SetCurrentRecipe(id) {
    if (this.Recipes.length > 0) {
      this.Recipes.forEach((recipe) => {
        if (recipe.id == id) {
          this.activatedRecipeSubject.next(recipe);
        }
      });
    } else {
      this.http
        .get(
          'https://food-store-3ea3e-default-rtdb.firebaseio.com/recipes/.json'
        )
        .subscribe((recipes: RecipeType[]) => {
          recipes.forEach((recipe) => {
            console.log('recipe.id', recipe.id);
            console.log('id', id);

            if (recipe.id == id) {
              console.log(recipe);
              this.activatedRecipeSubject.next(recipe);
            }
          });
        });
    }
  }
  deleteRecipe(id: number) {
    this.Recipes.splice(
      this.Recipes.findIndex((r) => r.id === id),
      1
    );
    this.http
      .put(
        'https://food-store-3ea3e-default-rtdb.firebaseio.com/recipes.json',
        this.Recipes
      )
      .subscribe((recipe) => {
        this.recipeListSubject.next(this.Recipes);
        this.activatedRecipeSubject.next(null);
      });
  }
}
