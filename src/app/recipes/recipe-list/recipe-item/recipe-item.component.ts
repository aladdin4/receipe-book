import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RecipeType } from '../../recipe.model';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() currentRecipe: RecipeType;
  @Output() exportRecipe = new EventEmitter<RecipeType>();

  onExportRecipe() {
    this.exportRecipe.emit(this.currentRecipe);
  }
}
