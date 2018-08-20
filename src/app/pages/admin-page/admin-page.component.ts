import { Component, OnInit } from '@angular/core';
import {RecipeServiceClient} from '../../services/recipe.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-admin-page',
  templateUrl: './admin-page.component.html',
  styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

  allRecipes = [];
  recipeTitle = '';

  constructor(private recipeService: RecipeServiceClient,
              private activatedRoute: ActivatedRoute) {
    this.activatedRoute.params.subscribe(params => this.selectRecipe(params['recipeId']));
  }


  selectRecipe(recipeId) {
    this.recipeService
        .findRecipeById(recipeId)
        .then(recipe => this.recipeTitle = recipe.title);
  }


    ngOnInit() {
        this.recipeService.findAllRecipes()
            .then(recipes => this.allRecipes = recipes);
    }
}
