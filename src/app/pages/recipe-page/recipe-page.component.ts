import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {RecipeServiceClient} from '../../services/recipe.service.client';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

    userCreator = false;
    isLoggedIn = false;

  creator = {
    username: String
  };

  recipe = {
      _id: String,
      title: String,
      image: String,
      creator: String,
      description: String,
      ingredients: [String],
      directions: [String],
      prepTime: Number,
      cookTime: Number,
      createdAt: Date,
      updatedAt: Date,
      numServings: Number,
      tags: [String]
  };
  directions: [String];
  ingredients: [String];
  comment: String;

  constructor(private route: ActivatedRoute,
              private userService: UserServiceClient,
              private recipeService: RecipeServiceClient) {
      this.route.params.subscribe(params => this.findRecipeById(params['recipeId']));
  }

  ngOnInit() {
      this.userService.profile()
          .then(loggedInUser => {
              this.userCreator = (this.recipe.creator === loggedInUser._id);
              this.isLoggedIn = true;
          }, () => this.isLoggedIn = false);
  }

  fixDate = (date) => {
      return new Date(date).toLocaleString();
  }

  deleteRecipe = () => {
      this.recipeService.deleteRecipe(this.recipe._id);
  }

  submitReview() {
    if (this.isLoggedIn) {
        // create a recipe
    } else {
        alert('Please sign in first.');
    }
  }

  findRecipeById = (recipeId) => {
    this.recipeService.findRecipeById(recipeId)
        .then(recipe => {
            this.recipe = recipe;
            this.userService.findUserById(recipe.creator)
                .then(user => this.creator = user);
        });
    console.log(recipeId);
    console.log(this.recipe.title);
  }
}
