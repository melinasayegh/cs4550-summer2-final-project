import {Component, Input, OnInit} from '@angular/core';
import {RecipeServiceClient} from '../../services/recipe.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-recipe-preview',
    templateUrl: './recipe-preview.component.html',
    styleUrls: ['./recipe-preview.component.css']
})
export class RecipePreviewComponent implements OnInit {

    @Input() recipeId = <any>{};
    recipe = {
        _id: String,
        title: String,
        image: String,
        tags: [String]
    };

    constructor(private recipeService: RecipeServiceClient,
                private activatedRoute: ActivatedRoute) {
        // this.activatedRoute.params.subscribe(params => this.loadRecipeData(params['recipeId']));
    }

    ngOnInit() {
        this.recipeService.findRecipeById(this.recipeId)
            .then(recipe => this.recipe = recipe);
    }

}
