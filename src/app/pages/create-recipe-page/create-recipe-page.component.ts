import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-recipe-page',
  templateUrl: './create-recipe-page.component.html',
  styleUrls: ['./create-recipe-page.component.css']
})
export class CreateRecipePageComponent implements OnInit {

  recipeTitle = '';
  recipeImage = '';
  recipeDescription = '';
  recipeIngredients = 'Write each ingredient on its own line';
  recipeDirections = 'Write each direction on its own line';


  constructor() { }

  ngOnInit() {
  }

}
