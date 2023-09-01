import { Component, OnDestroy, OnInit } from '@angular/core';
import { RecipeType } from 'src/app/Shared/recipe.model';
import { RecipeService } from 'src/app/services/recipeService/recipe-service.service';
import {
  FormGroup,
  FormControl,
  FormArray,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css'],
})
export class RecipeEditComponent implements OnInit, OnDestroy {
  activatedReciveSubscription: Subscription;

  constructor(
    private recipeService: RecipeService,
    private fb: FormBuilder,
    public route: ActivatedRoute
  ) {
    this.recipeService.activatedRecipeSubject.subscribe(
      (recipe: RecipeType) => {
        //1st reset the form
        this.recipeEditForm.reset();

        //2nd add ingredients to the form
        if (recipe.ingredients) {
          recipe.ingredients.forEach((ingredient) => {
            this.ingredients.push(
              new FormGroup({
                name: new FormControl(ingredient.name),
                amount: new FormControl(ingredient.amount),
              })
            );
          });
        }

        this.recipeEditForm.patchValue(recipe);
      }
    );
  }
  ngOnInit(): void {
    this.activatedReciveSubscription = this.route.params.subscribe((param) => {
      this.recipeService.SetCurrentRecipe(param.id);
    });
  }

  ngOnDestroy(): void {
    this.activatedReciveSubscription.unsubscribe();
  }

  saveRecipe() {
    this.recipeService.SaveRecipe(this.recipeEditForm.value);
    this.recipeEditForm.reset();
  }

  //setting up the form
  recipeEditForm = this.fb.group({
    id: 0,
    name: ['', [Validators.required]],
    imagePath: [''],
    description: ['', [Validators.required]],
    ingredients: this.fb.array([]),
  });

  //cleaner way to set and get a property
  //ingredients: FormArray = this.recipeEditForm.get('ingredients') as FormArray;
  get ingredients() {
    return this.recipeEditForm.get('ingredients') as FormArray;
  }

  //empty mini form for ingredients
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
  cancel() {
    this.recipeEditForm.reset();
  }
}
