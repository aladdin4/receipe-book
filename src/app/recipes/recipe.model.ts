export class RecipeType {
  name: string;
  description: string;
  imagePath: string;
  ingredients: string[];

  constructor(name: string, desc: string, path: string, ingred: string[]) {
    this.name = name;
    this.description = desc;
    this.imagePath = path;
    this.ingredients = ingred;
  }
}
