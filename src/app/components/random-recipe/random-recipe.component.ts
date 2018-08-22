import { Component, OnInit } from '@angular/core';
import {RecipeServiceClient} from '../../services/recipe.service.client';
import {ActivatedRoute} from '@angular/router';
import {RecipeApiServiceClient} from '../../services/recipe-api.service.client';
import {selectValueAccessor} from '@angular/forms/src/directives/shared';

@Component({
    selector: 'app-random-recipe',
    templateUrl: './random-recipe.component.html',
    styleUrls: ['./random-recipe.component.css']
})
export class RandomRecipeComponent implements OnInit {

    searchResults = [];
    recipeResults = [];
    sourceUrl = '';
    search = '';

    constructor(private recipeService: RecipeApiServiceClient,
                private aRoute: ActivatedRoute,
    ) {}

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
    }
}

