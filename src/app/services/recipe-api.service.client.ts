import {Injectable} from '@angular/core';

const SPOONACULAR_API = 'https://spoonacular-recipe-food-nutrition-v1.p.mashape.com/recipes/';

@Injectable()
export class RecipeApiServiceClient {

    searchRecipesWithAutocomplete = (searchTerm) => {
        return fetch(SPOONACULAR_API + 'autocomplete?number=20&query=' + searchTerm, {
            headers: {
                'accept': 'application/json',
                'x-mashape-key': 'VsYAEwDWxwmshX990l6hWa2WtVNAp1f1zBojsnIEiyKW9hG6Sf'
            }
        })
            .then(response => response.json());
    }

    findRecipeById = (recipeId) => {
        return fetch(SPOONACULAR_API + recipeId + '/information?includeNutrition=false', {
            headers: {
                'accept': 'application/json',
                'x-mashape-key': 'VsYAEwDWxwmshX990l6hWa2WtVNAp1f1zBojsnIEiyKW9hG6Sf'
            }
        })
            .then(response => response.json());
    }

    findRandomRecipes = () => {
        return fetch(SPOONACULAR_API + 'random?limitLicense=false&number=8', {
            headers: {
                'accept': 'application/json',
                'x-mashape-key': 'VsYAEwDWxwmshX990l6hWa2WtVNAp1f1zBojsnIEiyKW9hG6Sf'
            }
        })
            .then(response => response.json());
    }
}
