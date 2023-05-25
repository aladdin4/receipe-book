export class RecipeType {
  id: number;
  name: string;
  description: string;
  imagePath: string;
  ingredients: string[];

  constructor(
    id: number,
    name: string,
    desc: string,
    path: string,
    ingred: string[]
  ) {
    this.id = id;
    this.name = name;
    this.description = desc;
    this.imagePath = path;
    this.ingredients = ingred;
  }
}
