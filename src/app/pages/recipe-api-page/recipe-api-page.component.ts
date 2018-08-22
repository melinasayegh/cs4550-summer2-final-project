import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {RecipeServiceClient} from '../../services/recipe.service.client';
import {ReviewServiceClient} from '../../services/review.service.client';
import {RecipeApiServiceClient} from '../../services/recipe-api.service.client';

@Component({
  selector: 'app-recipe-api-page',
  templateUrl: './recipe-api-page.component.html',
  styleUrls: ['./recipe-api-page.component.css']
})
export class RecipeApiPageComponent implements OnInit {

    recipe = <any>{};
    title: String;
    sourceName: String;
    sourceUrl: String;
    directions: [String];
    ingredients: [String];
    winePairing: String;
    comment: String;
    possibleReview = {
        text: String,
        createdAt: Date,
        updatedAt: Date,
        user: {},
    };

    constructor(private route: ActivatedRoute,
                private userService: UserServiceClient,
                private recipeService: RecipeServiceClient,
                private recipeApiService: RecipeApiServiceClient,
                private reviewService: ReviewServiceClient) {
        this.route.params.subscribe(params => this.findRecipeById(params['recipeId']));
    }

    ngOnInit() {

    }

    fixDate = (date) => {
        return new Date(date).toLocaleString();
    }

    deleteRecipe = () => {
        this.recipeService.deleteRecipe(this.recipe._id);
    }

    findRecipeById = (recipeId) => {
        this.recipeApiService.findRecipeById(recipeId)
            .then(recipe => {
                this.recipe = recipe;
                this.winePairing = recipe.winePairing.pairingText;
                this.title = recipe.title;
                this.sourceName = recipe.sourceName;
                this.directions = recipe.analyzedInstructions[0].steps;
                this.sourceUrl = recipe.sourceUrl;
            });
    }
}
