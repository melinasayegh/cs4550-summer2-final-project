import { Component, OnInit } from '@angular/core';
import {RecipeServiceClient} from '../../services/recipe.service.client';

@Component({
  selector: 'app-random-recipe',
  templateUrl: './random-recipe.component.html',
  styleUrls: ['./random-recipe.component.css']
})
export class RandomRecipeComponent implements OnInit {

    randomRecipe;

    constructor(private recipeService: RecipeServiceClient) {
    }

    ngOnInit() {
        this.recipeService.getRandomRecipe()
            .then(recipe => this.randomRecipe = recipe);
        console.log(this.randomRecipe);
    }
}

