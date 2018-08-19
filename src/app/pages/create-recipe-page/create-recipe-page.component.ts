import {Component, Input, OnInit} from '@angular/core';
import {RecipeServiceClient} from '../../services/recipe.service.client';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../../services/user.service.client';

@Component({
  selector: 'app-create-recipe-page',
  templateUrl: './create-recipe-page.component.html',
  styleUrls: ['./create-recipe-page.component.css']
})
export class CreateRecipePageComponent implements OnInit {

    @Input() recipe = {
        title: String,
        image: String,
        description: String,
        ingredients: String,
        directions: String,
        prepTime: String,
        cookTime: String,
        numServings: String,
        tags: [String],
        directionsList: [],
        ingredientsList: []
    }
    user = {
        _id: String
    };
  title;
  image;
  description;
  ingredients;
  directions;
  prepTime;
  cookTime;
  numServings ;
  tags;
  directionsList;
  ingredientsList;

  constructor(private router: Router,
              private route: ActivatedRoute,
              private userService: UserServiceClient,
              private recipeService: RecipeServiceClient) {

  }

  setFields = () => {
      this.title = this.recipe.title;
      this.description = this.recipe.description;
      this.image = this.recipe.image;
      this.ingredients = this.recipe.ingredientsList;
      this.directions = this.recipe.directionsList;
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
            creator: this.user._id,
            // created at doesnt change
            updatedAt: new Date(),
            ingredients: this.ingredientsList,
            directions: this.directionsList,
            prepTime: Number(this.prepTime),
            cookTime: Number(this.cookTime),
            numServings: Number(this.numServings),
            tags: ['NONE'],
        };
        //this.recipeService.updateRecipe(id, recipe);
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
    this.recipeService.createRecipe(recipe);
  }

  ngOnInit() {
      this.userService.profile().then(user => this.user = user);
      //this.recipeService.findRecipeById()
  }
}
