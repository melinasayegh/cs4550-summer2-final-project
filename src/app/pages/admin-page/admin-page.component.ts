import { Component, OnInit } from '@angular/core';
import {RecipeServiceClient} from '../../services/recipe.service.client';
import {ActivatedRoute} from '@angular/router';
import {UserServiceClient} from '../../services/user.service.client';

@Component({
    selector: 'app-admin-page',
    templateUrl: './admin-page.component.html',
    styleUrls: ['./admin-page.component.css']
})
export class AdminPageComponent implements OnInit {

    allRecipes = [];
    recipeTitle = '';
    isValidAdmin;

    constructor(private recipeService: RecipeServiceClient,
                private userService: UserServiceClient,
                private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => this.selectRecipe(params['recipeId']));
        this.userService.profile()
            .then(user => this.isValidAdmin = user.isAdmin);
    }


    selectRecipe(recipeId) {
        this.recipeService
            .findRecipeById(recipeId)
            .then(recipe => this.recipeTitle = recipe.title);
    }

    ngOnInit() {
        this.userService.profile()
            .then(user => this.isValidAdmin = user.isAdmin);

        this.recipeService.findAllRecipes()
            .then(recipes => this.allRecipes = recipes);
    }
}
