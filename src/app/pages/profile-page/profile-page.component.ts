import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../../services/user.service.client';
import {RecipeServiceClient} from '../../services/recipe.service.client';

@Component({
    selector: 'app-profile-page',
    templateUrl: './profile-page.component.html',
    styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

    selectedTab = '';
    user = {
        username: String
    };
    myRecipes: [{
        recipe: {
            _id: String
        }
    }];
    faveRecipes: [{
        recipe: {
            _id: String
        }
    }];

    constructor(private router: Router, private userService: UserServiceClient,
                private recipeService: RecipeServiceClient) { }

    ngOnInit() {
        this.userService.profile().then(user => {
            this.user = user;
            this.faveRecipes = user.favoriteRecipes;
            this.myRecipes = user.myRecipes;
        });
    }

    selectTab = (tab) => {
        this.selectedTab = tab;
    }
}
