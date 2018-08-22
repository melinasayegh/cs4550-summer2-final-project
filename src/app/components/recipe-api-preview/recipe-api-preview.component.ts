import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipeApiServiceClient} from '../../services/recipe-api.service.client';

@Component({
  selector: 'app-recipe-api-preview',
  templateUrl: './recipe-api-preview.component.html',
  styleUrls: ['./recipe-api-preview.component.css']
})
export class RecipeApiPreviewComponent implements OnInit {
    @Input() recipeId = <any>{};
    recipe = <any>{};
    tags: [String];

    constructor(private recipeService: RecipeApiServiceClient) {}

    ngOnInit() {
        this.recipeService.findRecipeById(this.recipeId)
            .then(recipe => {
                this.recipe = recipe;
                this.setApiRecipeTags(recipe);
            });
    }

    setApiRecipeTags(recipe) {
        if (recipe.vegetarian === true) {
            this.tags.push('VEGETARIAN');
        } if (recipe.vegan === true) {
            this.tags.push('VEGAN');
        } if (recipe.dairyFree === true) {
            this.tags.push('DAIRY FREE');
        } if (recipe.veryHealthy === true) {
            this.tags.push('VERY HEALTHY');
        } if (recipe.sustainable === true) {
            this.tags.push('SUSTAINABLE');
        } if (recipe.ketogenic === true) {
            this.tags.push('KETOGENIC');
        }
    }

}
