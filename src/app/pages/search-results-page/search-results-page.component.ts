import { Component, OnInit } from '@angular/core';
import { RecipeServiceClient } from '../../services/recipe.service.client';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-results-page',
  templateUrl: './search-results-page.component.html',
  styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent implements OnInit {

  recipeTitle: String;
  recipes = <any>[];

  constructor(private activatedRoute: ActivatedRoute,
              private recipeService: RecipeServiceClient) { }

  ngOnInit() {
      this.activatedRoute.params.subscribe(params => {
        this.recipeTitle = params['recipeTitle'];

          this.recipeService.findRecipesByTitle(this.recipeTitle)
              .then(recipes => this.recipes = recipes);
      });
  }

}
