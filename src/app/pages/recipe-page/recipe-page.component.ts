import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recipe-page',
  templateUrl: './recipe-page.component.html',
  styleUrls: ['./recipe-page.component.css']
})
export class RecipePageComponent implements OnInit {

  comment: String;

  constructor() { }

  ngOnInit() {
  }

  submit() {
    // some create review function
  }

}
