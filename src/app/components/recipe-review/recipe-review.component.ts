
import {Component, Input, OnInit} from '@angular/core';


@Component({
  selector: 'app-recipe-review',
  templateUrl: './recipe-review.component.html',
  styleUrls: ['./recipe-review.component.css']
})
export class RecipeReviewComponent implements OnInit {

  @Input() currPage: String;

  constructor() { }

  ngOnInit() {
  }
  
  isNotCurrentPage(pageType) {
      if (pageType !== this.currPage) {
          return true;
      } else {
          return false;
      }
  }
}
