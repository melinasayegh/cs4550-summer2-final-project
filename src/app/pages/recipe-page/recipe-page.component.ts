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

  recipe = <any>{};
  directions: [String];
  ingredients: [String];
  comment: String;

  constructor(private route: ActivatedRoute,
              private userService: UserServiceClient,
              private recipeService: RecipeServiceClient) {}

  ngOnInit() {
      this.userService.profile()
          .then(loggedInUser => {
              this.userCreator = (this.recipe.creator === loggedInUser._id);
              this.isLoggedIn = true;
          }, () => this.isLoggedIn = false);
      this.route.params.subscribe(params => this.findRecipeById(params['recipeId']));
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
            console.log(this.recipe.reviews[0]._id);
            this.userService.findUserById(recipe.creator)
                .then(user => this.creator = user);
        });
  }
}
