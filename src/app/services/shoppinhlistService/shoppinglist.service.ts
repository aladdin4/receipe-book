import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from 'src/app/Shared/Ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class ShoppinglistService {
  Ingredients: Ingredient[] = [];

  public ShoppingListSubject = new Subject<Ingredient[]>();
  public CurrentSubject = new Subject<Ingredient>();
  public ModeSubject = new Subject<boolean>();
  public editIndex: number;

  ngOnInit(): void {
    // Set the current subject to a new Ingredient with empty name and 0 quantity.
    this.CurrentSubject.next(new Ingredient('', 0));

    // Set the edit mode subject to false.
    this.ModeSubject.next(false);
  }
  getCurrentShoppingList() {
    this.ShoppingListSubject.next(this.Ingredients);
  }

  addNewItem(ingredient: Ingredient, editMode: boolean) {
    if (!editMode) {
      this.Ingredients.push(ingredient);
    } else {
      this.Ingredients[this.editIndex] = ingredient;
    }

    this.ModeSubject.next(false);
    this.getCurrentShoppingList();
  }

  editItem(ingredient: Ingredient, index: number) {
    this.editIndex = index;
    this.CurrentSubject.next(ingredient);
    this.ModeSubject.next(true);
  }

  deleteItem(index: number) {
    this.Ingredients.splice(index, 1);
    this.getCurrentShoppingList();
  }
  addIngredientsToShoppingList(ingredientList: Ingredient[]) {
    this.Ingredients.push(...ingredientList);
    this.getCurrentShoppingList();
  }
}
