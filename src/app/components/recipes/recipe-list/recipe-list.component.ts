import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeType } from '../../../Shared/recipe.model';
import { RecipeService } from 'src/app/services/recipeService/recipe-service.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent implements OnInit, OnDestroy {
  //to implement oninit and on destroy
  constructor(private recipeService: RecipeService) {
    this.recipeListSubsriber = this.recipeService.recipeListSubject.subscribe(
      (recipes) => {
        console.log('received recipes are:', recipes);
        this.recipes = recipes;
      }
    );
  }

  recipeListSubsriber: Subscription;
  recipes: RecipeType[] = [];

  ngOnInit(): void {
    this.recipeService.getRecipes();
  }
  ngOnDestroy(): void {
    this.recipeListSubsriber.unsubscribe();
  }
}
