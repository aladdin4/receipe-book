import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css'],
})
export class RecipeListComponent {
  Recipes: Recipe[] = [];
  @Output() createSpan = new EventEmitter<any>();

  @ViewChild('test', { static: true }) test;

  constructor() {
    console.log('test', this.test);
  }
  addRecipe(val) {
    console.log(val);
    this.createSpan.emit();
    // this.Recipes.push(
    //   new Recipe(
    //     'test recipe',
    //     "our first recipe, it's hardcoded",
    //     'https://i0.hippopx.com/photos/891/700/843/asparagus-italy-piemonte-piedmont-preview.jpg'
    //   )
    // );
  }
}
