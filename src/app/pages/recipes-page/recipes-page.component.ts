import { Component, OnInit } from '@angular/core';
import {RecipeServiceClient} from '../../services/recipe.service.client';

@Component({
  selector: 'app-recipes-page',
  templateUrl: './recipes-page.component.html',
  styleUrls: ['./recipes-page.component.css']
})
export class RecipesPageComponent implements OnInit {
    recipes: [{
        recipe: {
            _id: String
        }
    }];

  constructor(private recipeService: RecipeServiceClient) { }

  ngOnInit() {
      this.recipeService.findAllRecipes()
          .then(recipes => this.recipes = recipes);
  }
}
