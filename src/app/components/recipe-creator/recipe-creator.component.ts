import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {RecipeServiceClient} from '../../services/recipe.service.client';

@Component({
  selector: 'app-recipe-creator',
  templateUrl: './recipe-creator.component.html',
  styleUrls: ['./recipe-creator.component.css']
})
export class RecipeCreatorComponent implements OnInit {

    myUrl;
    isEditing = false;
    recipeId;
    recipe = {
        title: String,
        image: String,
        description: String,
        ingredients: [String],
        directions: [String],
        prepTime: String,
        cookTime: String,
        numServings: String,
        tags: [String]
    };

    user = {
        _id: String,
        isAdmin: Boolean
    };
    title;
    image;
    description;
    ingredients;
    directions;
    prepTime;
    cookTime;
    numServings;
    tags;
    directionsList;
    ingredientsList;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private userService: UserServiceClient,
                private recipeService: RecipeServiceClient) {
        this.route.params.subscribe(params => this.loadRecipe(params['recipeId']));
        this.myUrl = this.route.snapshot.url;
    }

    loadRecipe = (recipeId) => {
        if (recipeId !== undefined || recipeId !== null) {
            this.recipeId = recipeId;
            this.recipeService.findRecipeById(recipeId)
                .then(recipe => this.recipe = recipe)
                .then(() => this.setFields());
        } else {
            this.isEditing = false;
        }
    }

    setFields = () => {
        const ingredientsString = this.recipe.ingredients.join('\n');
        const directionsString = this.recipe.directions.join('\n');

        this.isEditing = true;
        this.title = this.recipe.title;
        this.description = this.recipe.description;
        this.image = this.recipe.image;
        this.ingredients = ingredientsString;
        this.directions = directionsString;
        this.prepTime = this.recipe.prepTime;
        this.cookTime  = this.recipe.cookTime;
        this.numServings  =  this.recipe.numServings;
    }

    updateRecipe = () => {

        this.directionsList = this.directions.split('\n');
        this.ingredientsList = this.ingredients.split('\n');

        const recipe = {
            title: this.title,
            description: this.description,
            image: this.image,
            updatedAt: new Date(),
            ingredients: this.ingredientsList,
            directions: this.directionsList,
            prepTime: Number(this.prepTime),
            cookTime: Number(this.cookTime),
            numServings: Number(this.numServings),
            tags: ['NONE'],
        };
        this.recipeService.updateRecipe(this.recipeId, recipe)
            .then(() => {
                if (this.user.isAdmin) {
                    this.router.navigate(['admin/recipe']);
                } else {
                    this.router.navigate(['profile']);
                }
            });
    }

    createRecipe = () => {
        this.directionsList = this.directions.split('\n');
        this.ingredientsList = this.ingredients.split('\n');

        const recipe = {
            title: this.title,
            description: this.description,
            image: this.image,
            creator: this.user._id,
            createdAt: new Date(),
            updatedAt: new Date(),
            ingredients: this.ingredientsList,
            directions: this.directionsList,
            prepTime: Number(this.prepTime),
            cookTime: Number(this.cookTime),
            numServings: Number(this.numServings),
            tags: ['NONE'],
        };
        this.recipeService.createRecipe(recipe)
            .then(() => {
                if (this.user.isAdmin) {
                    this.router.navigate(['admin/recipe']);
                } else {
                    this.router.navigate(['profile']);
                }
            });
    }

    deleteRecipe = () => {
        this.recipeService.deleteRecipe(this.recipeId)
            .then(() => {
                if (this.user.isAdmin) {
                    this.router.navigate(['admin/recipe']);
                } else {
                    this.router.navigate(['profile']);
                }
        });
    }

    ngOnInit() {
        this.userService.profile().then(user => this.user = user);
    }
}
