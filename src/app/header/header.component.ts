import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() showRecipe = new EventEmitter<'recipe'>();
  openRecipe() {
    this.showRecipe.emit('recipe');
  }

  @Output() showShoppingList = new EventEmitter<'shoppingList'>();
  openShoppingList() {
    this.showShoppingList.emit('shoppingList');
  }
}
