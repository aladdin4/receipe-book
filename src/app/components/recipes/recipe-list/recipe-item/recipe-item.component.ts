import { Host, HostBinding, Inject } from '@angular/core';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeType } from '../../../../Shared/recipe.model';
import { RecipeListComponent } from '../recipe-list.component';
import { RecipeService } from 'src/app/services/recipeService/recipe-service.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  constructor(private recipeService: RecipeService, private router: Router) {}
  @Input() currentRecipe: RecipeType;
}
