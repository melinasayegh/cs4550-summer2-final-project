import { Injectable } from '@angular/core';

const LOCAL_URL = 'http://localhost:3000/api/';
const HEROKU_URL = 'https://community-cookings-server.herokuapp.com/api/';

@Injectable()
export class RecipeServiceClient {

    getRandomRecipe = (tag) => {
        return fetch(LOCAL_URL + 'randomRecipe/' + tag)
            .then(response => response.json());
    }

    findAllRecipes = () => {

    }

    findRecipeById = (recipeId) => {
        return fetch('http://localhost:3000/api/recipe/' + recipeId, {
            method: 'get',
            credentials: 'include'
        }).then(response => response.json());
    }

    createRecipe = (recipe) => {
        return fetch(LOCAL_URL + 'recipe', {
            method: 'post',
            body: JSON.stringify(recipe),
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            }
        });
    }
}