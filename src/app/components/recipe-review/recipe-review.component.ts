
import {Component, Input, OnInit} from '@angular/core';
import {ReviewServiceClient} from '../../services/review.service.client';


@Component({
  selector: 'app-recipe-review',
  templateUrl: './recipe-review.component.html',
  styleUrls: ['./recipe-review.component.css']
})
export class RecipeReviewComponent implements OnInit {

  @Input() currPage: String;
  @Input() reviewId: String;

  review = {
      text: String,
      createdAt: Date,
      updatedAt: Date,
      user:  {
          username: String
      },
      recipe: {
          title: String,
          image: String
      }
  };
  constructor(private reviewService: ReviewServiceClient) { }

    fixDate = (date) => {
        return new Date(date).toLocaleString();
    }
  ngOnInit() {
      this.reviewService.findReviewById(this.reviewId)
          .then(review => this.review = review);
  }
  isNotCurrentPage(pageType) {
      if (pageType !== this.currPage) {
          return true;
      } else {
          return false;
      }
  }
}
