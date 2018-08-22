import { Component, OnInit } from '@angular/core';
import {RecipeServiceClient} from '../../services/recipe.service.client';
import {UserServiceClient} from '../../services/user.service.client';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

    isAlert = true;
  recipes: [{
    recipe: {
      _id: String
    }
  }];
  user: {
      username: String,
      myRecipes: [{}]
  }
  isLoggedIn = false;

  constructor(private recipeService: RecipeServiceClient,
              private userService: UserServiceClient) {}

  removeAlert = () => {
      this.isAlert = false;
  }
  ngOnInit() {
    this.recipeService.findAllRecipes()
        .then(recipes => {
          var arr = <any>[];

          for (let i=0; i<3; i++) {
            arr.push(recipes[i]);
          }

          this.recipes = arr;
        });
    this.userService.currentUser()
        .then(user => {
            this.user = user;
            this.isLoggedIn = true;
        }, () => this.isLoggedIn = false);
  }
}
