import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecipeService } from 'src/app/core/services/recipe.service';
import { Recipe } from 'src/app/shared/models/recipe.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss']
})
export class RecipeDetailPage implements OnInit {
  loadedRecipe: Recipe;

  constructor(
    private activatedRoute: ActivatedRoute,
    private recipeService: RecipeService
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('recipeId')) {
        // redirect
        return;
      }
      const recipeId = paramMap.get('recipeId');
      this.loadedRecipe = this.recipeService.getRecipe(recipeId);
    });
  }
}
