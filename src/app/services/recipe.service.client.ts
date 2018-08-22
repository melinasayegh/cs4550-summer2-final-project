import { Injectable } from '@angular/core';

const LOCAL_URL = 'http://localhost:3000/api/';
const HEROKU_URL = 'https://community-cookings-server.herokuapp.com/api/';

@Injectable()
export class RecipeServiceClient {

    getRandomRecipe = (tag) => {
        return fetch(HEROKU_URL + 'randomRecipe/' + tag)
            .then(response => response.json());
    }

    findAllRecipes = () => {
        return fetch(HEROKU_URL + 'recipe', {
            method: 'get',
            credentials: 'include'
        }).then(response => response.json());
    }

    findRecipeById = (recipeId) => {
        return fetch(HEROKU_URL + 'recipe/' + recipeId, {
            method: 'get',
            credentials: 'include'
        }).then(response => response.json());
    }

    findRecipesByTitle = (recipeTitle) => {
        return fetch(HEROKU_URL + 'results/' + recipeTitle, {
            method: 'get',
            credentials: 'include'
        }).then(response => response.json());
    }

    createRecipe = (recipe) => {
        return fetch(HEROKU_URL + 'recipe', {
            method: 'post',
            body: JSON.stringify(recipe),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    updateRecipe = (recipeId, recipe) => {
        return fetch(HEROKU_URL + 'recipe/' + recipeId, {
            method: 'put',
            body: JSON.stringify(recipe),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }

    deleteRecipe = (recipeId) => {
        return fetch(HEROKU_URL + 'recipe/' + recipeId, {
            method: 'delete',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }
}
