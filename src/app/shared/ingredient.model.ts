export class Ingredient {
  constructor(public name: string, public amount: number) {}

  getIngredientName(): string {
    return this.name;
  }
  getIngredientAmount(): number {
    return this.amount;
  }
  setIngredientName(name: string): void {
    this.name = name;
  }
  setIngredientAmount(amount: number): void {
    this.amount = amount;
  }
}
