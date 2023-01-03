import { Component } from '@angular/core';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
})
export class RecipesComponent {
  repeats: string[];

  constructor() {
    this.repeats = [];
  }
  onAddEvent(e) {
    // console.log('called');
    // console.log('e', e);
    this.repeats.push('hi');
  }
}
