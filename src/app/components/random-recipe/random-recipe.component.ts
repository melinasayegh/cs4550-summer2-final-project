import { Component, OnInit } from '@angular/core';
import {RecipeServiceClient} from '../../services/recipe.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-random-recipe',
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.css']
})
export class RandomRecipeComponent implements OnInit {

    randomRecipe;
    sourceUrl = '';
    tag = '';

    constructor(private recipeService: RecipeServiceClient,
                private aRoute: ActivatedRoute,
    ) {
        this.aRoute.params.subscribe(params => this.loadRandomRecipe(params['tag']));
    }

    loadRandomRecipe(tag) {
        this.tag = tag;
        this.recipeService.getRandomRecipe(tag)
            .then(recipe => this.randomRecipe = recipe)
            .then(recipe => this.sourceUrl = recipe.sourceUrl);
    }

    ngOnInit() {
    }
}

