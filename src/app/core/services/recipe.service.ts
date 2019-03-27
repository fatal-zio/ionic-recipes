import { Injectable } from '@angular/core';
import { Recipe } from '../../shared/models/recipe.model';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    {
      id: 'id1',
      title: 'Schnitzel',
      imageUrl:
        'https://activerain-store.s3.amazonaws.com/blog_entries/210/5026210/original/Wiener_Schnitzel.jpg',
      ingredients: ['French Fries', 'Pork', 'Salad']
    },
    {
      id: 'id2',
      title: 'Spaghetti',
      imageUrl:
        'https://media.istockphoto.com/photos/spaghetti-bolognese-on-a-white-plate-picture-id652225084',
      ingredients: ['Spaghetti', 'Ground Beef', 'Tomatoes']
    }
  ];

  constructor() {}

  getRecipes() {
    return [...this.recipes];
  }

  getRecipe(recipeId: string) {
    return {
      ...this.recipes.find(recipe => {
        return recipe.id === recipeId;
      })
    };
  }

  deleteRecipe(recipeId: string) {
    this.recipes = this.recipes.filter(o => {
      return o.id !== recipeId;
    });
  }
}
