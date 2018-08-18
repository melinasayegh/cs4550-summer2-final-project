import { Injectable } from '@angular/core';

const LOCAL_URL = 'http://localhost:3000/api/';
const HEROKU_URL = 'https://community-cookings-server.herokuapp.com/api/';

@Injectable()
export class RecipeServiceClient {

    getRandomRecipe(tag) {
        return fetch(LOCAL_URL + 'randomRecipe/' + tag)
            .then(response => response.json());
    }

}