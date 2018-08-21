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
    isAdmin = false;
    username;
    password;

    constructor(private recipeService: RecipeServiceClient,
                private userService: UserServiceClient,
                private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => this.selectRecipe(params['recipeId']));
    }
    selectRecipe(recipeId) {
        this.recipeService
            .findRecipeById(recipeId)
            .then(recipe => this.recipeTitle = recipe.title);
    }
    ngOnInit() {
        this.userService.currentUser()
            .then(user => {
                if (user.username !== undefined) {

                    if ((user.username === 'admin') && (user.password === 'admin')) {
                        this.isAdmin = true;
                    } else {
                        this.isAdmin = false;
                    }
                } else {
                    this.isAdmin = false;
                }

            });

        this.recipeService.findAllRecipes()
            .then(recipes => this.allRecipes = recipes);
    }
}
