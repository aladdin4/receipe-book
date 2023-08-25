import { Component } from '@angular/core';
import { Ingredient } from '../../Shared/Ingredient.model';
import { ShoppinglistService } from 'src/app/services/shoppinhlistService/shoppinglist.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  constructor(private shoppinglistService: ShoppinglistService) {}
  Ingredients: Ingredient[];
  shoppingListSubscription: Subscription;

  ngOnInit(): void {
    this.shoppingListSubscription =
      this.shoppinglistService.ShoppingListSubject.subscribe(
        (ingredientList) => (this.Ingredients = ingredientList)
      );
  }
  ngOnDestroy(): void {
    this.shoppingListSubscription.unsubscribe();
  }

  editItem(index: number) {
    this.shoppinglistService.editItem(this.Ingredients[index], index);
  }
  deleteItem(index: number) {
    this.shoppinglistService.deleteItem(index);
  }
}
