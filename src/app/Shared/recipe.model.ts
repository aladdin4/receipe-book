import { Ingredient } from './Ingredient.model';

export class RecipeType {
  id?: number;
  name: string;
  description: string;
  imagePath: string;
  ingredients: Ingredient[];

  constructor(
    id: number = 0,
    name: string = '',
    desc: string = '',
    path: string = '',
    ingredList: Ingredient[]
  ) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imagePath = path;
    this.ingredients = ingredList;
  }
}
