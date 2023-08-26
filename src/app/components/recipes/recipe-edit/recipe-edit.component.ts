import { Component } from '@angular/core';
import { RecipeType } from 'src/app/Shared/recipe.model';
import { RecipeService } from 'src/app/services/recipeService/recipe-service.service';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent {
  constructor(private recipeService: RecipeService, private fb: FormBuilder) {}
  addRecipe() {
    this.recipeService.AddRecipe(this.recipeEditForm.value as RecipeType);
    this.recipeEditForm.reset();
  }
  recipeEditForm = this.fb.group({
    id: [0],
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/),
      ],
    ],
    imagePath: [
      'https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHJlY2lwZXxlbnwwfHwwfHw%3D&w=1000&q=80',
    ],
    description: ['', [Validators.required]],
    ingredients: this.fb.array([]),
  });

  get ingredients() {
    return this.recipeEditForm.get('ingredients') as FormArray;
  }
  addIngredient() {
    this.ingredients.push(
      this.fb.group({
        name: [
          '',
          [
            Validators.required,
            Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/),
          ],
        ],
        amount: [0, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
      })
    );
  }
  removeIngredient(index: number) {
    this.ingredients.removeAt(index);
  }
}
