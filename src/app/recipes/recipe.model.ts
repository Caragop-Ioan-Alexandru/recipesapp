import { Ingredient } from '../shared/ingredient.model';

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.ingredients = ingredients;
  }

  getName(): string {
    return this.name;
  }

  setName(name: string): void {
    this.name = name;
  }
  getDescription(): string {
    return this.description;
  }

  setDescription(desc: string): void {
    this.description = desc;
  }
  getImage(): string {
    return this.imagePath;
  }

  setImage(imagePath: string): void {
    this.imagePath = imagePath;
  }
  setIngredients(ingredient: Ingredient[]) {
    this.ingredients = ingredient;
  }
  getIngredients(): Ingredient[] {
    return this.ingredients;
  }
}
