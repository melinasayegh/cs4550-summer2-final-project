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
    currUser = <any>{};

  creator = {
    username: String
  };

  recipe = <any>{};
  directions: [String];
  ingredients: [String];
  comment: String;
  isFavorited: boolean;

  constructor(private route: ActivatedRoute,
              private userService: UserServiceClient,
              private recipeService: RecipeServiceClient) {}

  ngOnInit() {
      this.userService.currentUser()
          .then(loggedInUser => {
              this.currUser = loggedInUser;
              this.userCreator = (this.recipe.creator === loggedInUser._id);
              this.isLoggedIn = true;
              this.checkFavoriteStatus();
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
            this.userService.findUserById(recipe.creator)
                .then(user => this.creator = user);
        });
  }

  checkFavoriteStatus() {
    for (var i = 0; i < this.currUser.favoriteRecipes.length; i++) {
        if (this.currUser.favoriteRecipes[i]._id === this.recipe._id) {
            this.isFavorited = true;
            break;
        } else {
            this.isFavorited = false;
        }
    }
  }

  favoriteRecipe() {
      let updatedUser;
      if (this.isFavorited) {
          updatedUser = {
              username: this.currUser.username,
              password: this.currUser.password,
              firstName: this.currUser.firstName,
              lastName: this.currUser.lastName,
              email: this.currUser.email,
              isAdmin: this.currUser.isAdmin,
              myRecipes: this.currUser.myRecipes,
              favoriteRecipes: this.currUser.favoriteRecipes.filter(r => {
                  return r._id !== this.recipe._id;
              }),
              reviews: this.currUser.reviews,
              friends: this.currUser.friends
          };
      } else {
          const updatedFavorites = this.currUser.favoriteRecipes.push(this.recipe);

          updatedUser = {
              username: this.currUser.username,
              password: this.currUser.password,
              firstName: this.currUser.firstName,
              lastName: this.currUser.lastName,
              email: this.currUser.email,
              isAdmin: this.currUser.isAdmin,
              myRecipes: this.currUser.myRecipes,
              favoriteRecipes: this.currUser.favoriteRecipes,
              reviews: this.currUser.reviews,
              friends: this.currUser.friends
          };
      }
      this.userService.updateProfile(updatedUser)
          .then(response => this.ngOnInit());
  }

}
