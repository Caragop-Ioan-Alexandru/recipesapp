import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
  recipesChanged: BehaviorSubject<Recipe[]> = new BehaviorSubject<Recipe[]>([]);
  recipesChanged$ = this.recipesChanged.asObservable();
  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'A test recipe',
  //     'This is a simple test description of the test recipe',
  //     'https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d',
  //     [new Ingredient('meat', 1), new Ingredient('fries', 20)]
  //   ),
  //   new Recipe(
  //     'Another test recipe',
  //     'This is a simple test description of the test recipe',
  //     'https://c.pxhere.com/images/22/4a/6321d069b3386c120e0c860dc56a-1620832.jpg!d',
  //     [new Ingredient('buns', 2), new Ingredient('meat', 1)]
  //   ),
  // ];
  private recipes: Recipe[] = [];
  constructor(private shoppingListService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice());
  }
  getRecipes(): Recipe[] {
    return this.recipes.slice();
  }
  getRecipe(id: number): Recipe {
    return this.recipes[id];
  }
  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }
  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }
  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
