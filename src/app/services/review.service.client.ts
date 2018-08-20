import { Injectable } from '@angular/core';

const LOCAL_URL = 'http://localhost:3000/api/';
const HEROKU_URL = 'https://community-cookings-server.herokuapp.com/api/';

@Injectable()
export class ReviewServiceClient {
    findAllReviews = () => {
        return fetch(LOCAL_URL + 'review', {
            method: 'get',
            credentials: 'include'
        }).then(response => response.json());
    }

    findReviewById = (reviewId) => {
        return fetch(LOCAL_URL + 'review/' + reviewId, {
            method: 'get',
            credentials: 'include'
        }).then(response => response.json());
    }

    findReviewsForRecipe = (recipeId) => {
        return fetch(LOCAL_URL + 'recipe/' + recipeId + '/review', {
            method: 'get',
            credentials: 'include'
        }).then(response => response.json());
    }

    findReviewsForUser = () => {
        return fetch(LOCAL_URL + 'review/user', {
            method: 'get',
            credentials: 'include'
        }).then(response => response.json());
    }

    createReview = (recipeId, review) => {
        return fetch(LOCAL_URL + 'recipe/' + recipeId + '/review', {
            method: 'post',
            body: JSON.stringify(review),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    updateReview = (recipeId, reviewId, review) => {
        return fetch(LOCAL_URL + 'recipe/' + recipeId + 'recipe/' + reviewId, {
            method: 'put',
            body: JSON.stringify(review),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    deleteReview = (reviewId) => {
        return fetch(LOCAL_URL + 'review/' + reviewId, {
            method: 'delete',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }
}