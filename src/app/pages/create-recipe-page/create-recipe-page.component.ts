import { Component, OnInit } from '@angular/core';
import {RecipeServiceClient} from '../../services/recipe.service.client';
import {Router} from '@angular/router';
import {UserServiceClient} from '../../services/user.service.client';

@Component({
  selector: 'app-create-recipe-page',
  templateUrl: './create-recipe-page.component.html',
  styleUrls: ['./create-recipe-page.component.css']
})
export class CreateRecipePageComponent implements OnInit {

    user = {
        _id: String
    };
  title = '';
  image = '';
  description = '';
  ingredients = '';
  directions = '';
  prepTime = '';
  cookTime = '';
  numServings = '';
  tags: [String];
  directionsList: string[];
  ingredientsList: string[];

  constructor(private router: Router,
              private userService: UserServiceClient,
              private recipeService: RecipeServiceClient) { }

  createRecipe() {

      this.directionsList = this.directions.split('\n');
      this.ingredientsList = this.ingredients.split('\n');

    const recipe = {
      title: this.title,
        description: this.description,
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
    this.recipeService.createRecipe(recipe);
  }

  ngOnInit() {
      this.userService.profile().then(user => this.user = user);
  }
}
