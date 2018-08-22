import { Component, OnInit } from '@angular/core';
import {RecipeServiceClient} from '../../services/recipe.service.client';
import {RecipeApiServiceClient} from '../../services/recipe-api.service.client';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {
    recipes: [{
        recipe: {
            _id: String;
        }
    }];

    apiRecipes: [{
        apiRecipe: {
            id: String;
        }
    }];

  constructor(private recipeService: RecipeServiceClient,
              private recipeApiService: RecipeApiServiceClient) { }

  ngOnInit() {
      this.recipeService.findAllRecipes()
          .then(recipes => this.recipes = recipes);

      this.recipeApiService.findRandomRecipes()
          .then(recipes => this.apiRecipes = recipes.recipes);
  }
}
