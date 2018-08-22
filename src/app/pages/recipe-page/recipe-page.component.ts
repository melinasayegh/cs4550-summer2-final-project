import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {RecipeServiceClient} from '../../services/recipe.service.client';
import {ActivatedRoute} from '@angular/router';
import {ReviewServiceClient} from '../../services/review.service.client';

@Component({
    selector: 'app-recipe-page',
    templateUrl: './recipe-page.component.html',
    styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

    userCreator = false;
    isLoggedIn = false;

    creator = {
        username: String
    };

    recipe = <any>{};
    directions: [String];
    ingredients: [String];
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
                private reviewService: ReviewServiceClient) {}

    ngOnInit() {
        this.userService.profile()
            .then(loggedInUser => {
                this.userCreator = (this.recipe.creator === loggedInUser._id);
                this.isLoggedIn = true;
            }, () => this.isLoggedIn = false);
        this.route.params.subscribe(params => this.findRecipeById(params['recipeId']));
    }

    fixDate = (date) => {
        return new Date(date).toLocaleString();
    }

    deleteRecipe = () => {
        this.recipeService.deleteRecipe(this.recipe._id);
    }

    submitReview() {
        if (this.isLoggedIn) {
            // this.possibleReview.text = this.comment;
            // this.reviewService.createReview(this.route.params['recipeId'], )
        } else {
            alert('Please sign in before leaving a review.');
        }
    }

    findRecipeById = (recipeId) => {
        this.recipeService.findRecipeById(recipeId)
            .then(recipe => {
                this.recipe = recipe;
                this.userService.findUserById(recipe.creator)
                    .then(user => this.creator = user);
            });
    }
}
