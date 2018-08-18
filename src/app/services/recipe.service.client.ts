import { Injectable } from '@angular/core';

const LOCAL_URL = 'http://localhost:3000/api/';
const HEROKU_URL = 'https://community-cookings-server.herokuapp.com/api/';

@Injectable()
export class RecipeServiceClient {

    getRandomRecipe() {
        return fetch(LOCAL_URL + 'randomRecipe')
            .then(response => response.json());
    }

}