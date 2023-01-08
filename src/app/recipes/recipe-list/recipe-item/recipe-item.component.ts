import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css'],
})
export class RecipeItemComponent {
  @Input() currentRecipe: {
    name: string;
    description: string;
    imagePath: string;
    ingredients: string[];
  };
  @Output() exportRecipe = new EventEmitter<{
    name: string;
    description: string;
    imagePath: string;
    ingredients: string[];
  }>();

  onExportRecipe() {
    this.exportRecipe.emit(this.currentRecipe);
  }
}
