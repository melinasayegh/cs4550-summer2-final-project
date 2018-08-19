import { Component, OnInit } from '@angular/core';
import {RecipeServiceClient} from '../../services/recipe.service.client';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  recipes: [{
    recipe: {
      _id: String
    }
  }
  ];

  constructor(private recipeService: RecipeServiceClient) {}

  ngOnInit() {
    this.recipeService.findAllRecipes()
        .then(recipes => this.recipes = recipes);
  }
}
