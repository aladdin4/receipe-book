export class Recipe {
  name: string;
  description: string;
  imagePath: string;
  /**
   *For creating recipe items, I suppose?
   */
  constructor(name: string, desc: string, path: string) {
    this.name = name;
    this.description = desc;
    this.imagePath = path;
  }
}
