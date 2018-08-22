import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {RecipeApiServiceClient} from '../../services/recipe-api.service.client';

@Component({
    selector: 'app-search-results-page',
    templateUrl: './search-results-page.component.html',
    styleUrls: ['./search-results-page.component.css']
})
export class SearchResultsPageComponent implements OnInit {

    searchResults = [];
    recipeResults = [];
    sourceUrl = '';
    search = '';

    constructor(private activatedRoute: ActivatedRoute,
                private recipeService: RecipeApiServiceClient) { }


    loadRandomRecipe(search) {
        this.search = search;
        this.recipeService.searchRecipesWithAutocomplete(search)
            .then(searchResults => {
                this.searchResults = searchResults;
                this.searchResults.map(result => {
                    this.recipeService.findRecipeById(result.id)
                        .then(recipe => this.recipeResults.push(recipe));
                });
            });
    }
    ngOnInit() {
        this.activatedRoute.params.subscribe(params => {
            this.search = params['recipeTitle'];

            this.loadRandomRecipe(this.search);
        });
    }

}
