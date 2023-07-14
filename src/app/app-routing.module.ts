import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipesComponent } from './components/recipes/recipes.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const routes: Routes = [
  { path: 'recipes', component: RecipesComponent },
  { path: 'shoppinglist', component: ShoppingListComponent },
  { path: '**', redirectTo: 'recipes' },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
