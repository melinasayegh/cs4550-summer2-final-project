import { Component, OnInit } from '@angular/core';
import {RecipeServiceClient} from '../../services/recipe.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-recipe-preview',
    templateUrl: './recipe-preview.component.html',
    styleUrls: ['./recipe-preview.component.css']
})
export class RecipePreviewComponent implements OnInit {

    recipe = {};
    recipeTitle = '';
    sourceUrl = '';
    imageUrl = '';
    tag = '';

    constructor(private recipeService: RecipeServiceClient,
                private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => this.loadRecipeData(params['recipeId']));
    }

    loadRecipeData(recipeId) {

    }
    ngOnInit() {
    }

}
