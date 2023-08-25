import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { Ingredient } from 'src/app/Shared/Ingredient.model';
import { ShoppinglistService } from 'src/app/services/shoppinhlistService/shoppinglist.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  currentItemSubscription: Subscription;
  modeSubscription: Subscription;

  constructor(
    private shoppinglistService: ShoppinglistService,
    private fb: FormBuilder
  ) {}
  public editMode: boolean;
  recipeEditForm = this.fb.group({
    name: [
      '',
      [
        Validators.required,
        Validators.pattern(/^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/),
      ],
    ],
    amount: [0, [Validators.required, Validators.pattern(/^[1-9]\d*$/)]],
  });

  ngOnInit(): void {
    // Subscribe to the CurrentSubject observable to get the current item
    this.currentItemSubscription =
      this.shoppinglistService.CurrentSubject.subscribe((currentItem) => {
        this.recipeEditForm.patchValue(currentItem);
      });

    // Subscribe to the ModeSubject observable to get the edit mode
    this.modeSubscription = this.shoppinglistService.ModeSubject.subscribe(
      (mode) => {
        this.editMode = mode;
      }
    );
  }

  ngOnDestroy(): void {
    this.currentItemSubscription.unsubscribe();
    this.modeSubscription.unsubscribe();
  }

  newIngredientAdded(index: number = 0) {
    console.log('called');
    // Create a new ingredient object using the values from the form
    let newIng: Ingredient = {
      name: this.recipeEditForm.get('name').value,
      amount: this.recipeEditForm.get('amount').value,
    };

    // Add the new ingredient to the shopping list
    this.shoppinglistService.addNewItem(newIng, this.editMode);

    // Reset the form
    this.recipeEditForm.reset();
  }

  clearForm() {
    this.shoppinglistService.ModeSubject.next(false);
    this.recipeEditForm.reset();
  }
}
