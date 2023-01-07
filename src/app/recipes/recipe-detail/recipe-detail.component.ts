import { Component, Input } from '@angular/core';
import { Ingredient } from 'src/app/Shared/Ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() recipe: {
    name: string;
    imagePath: string;
    description: string;
    ingredients: string[];
  };
}
