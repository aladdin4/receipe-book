import { Component } from '@angular/core';
import { Ingredient } from '../../Shared/Ingredient.model';
import { ShoppinglistService } from 'src/app/services/shoppinhlistService/shoppinglist.service';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css'],
})
export class ShoppingListComponent {
  constructor(private shoppinglistService: ShoppinglistService) {}
  Ingredients: Ingredient[] = this.shoppinglistService.Ingredients;
}
