import { Component } from '@angular/core';
import { RecipeType } from 'src/app/Shared/recipe.model';
import { RecipeService } from 'src/app/services/recipeService/recipe-service.service';
import { FormGroup, FormControl, FormArray, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent {
  constructor(private recipeService: RecipeService, private fb: FormBuilder) {}
  onSubmit() {
    this.recipeService.AddRecipe(this.recipeEditForm.value as RecipeType);
  }
  recipeEditForm = this.fb.group({
    id: 0,
    name: [''],
    imagePath: [''],
    description: [''],
    ingredients: this.fb.array([]),
  });

  get ingredients() {
    return this.recipeEditForm.get('ingredients') as FormArray;
  }
  addIngredient() {
    this.ingredients.push(
      this.fb.group({
        name: [''],
        amount: 0,
      })
    );
  }
  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }
}
