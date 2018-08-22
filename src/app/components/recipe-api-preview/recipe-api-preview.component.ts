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

    constructor(private recipeService: RecipeApiServiceClient) {}

    ngOnInit() {
        this.recipeService.findRecipeById(this.recipeId)
            .then(recipe => this.recipe = recipe);
    }

}
