import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {ActivatedRoute} from '@angular/router';
import {RecipeServiceClient} from '../../services/recipe.service.client';

@Component({
  selector: 'app-admin-users',
  templateUrl: './admin-users.component.html',
  styleUrls: ['./admin-users.component.css']
})
export class AdminUsersComponent implements OnInit {

    allUsers = [];
    selectedFirstName = '';
    selectedLastName = '';
    selectedUsername = '';
    isValidAdmin = '';

    constructor(private recipeService: RecipeServiceClient,
                private userService: UserServiceClient,
                private activatedRoute: ActivatedRoute) {
        this.activatedRoute.params.subscribe(params => this.selectUser(params['userId']));
    }


    selectUser(userId) {
        this.userService
            .findUserById(userId)
            .then(user => {
              this.selectedFirstName = user.firstName;
              this.selectedLastName = user.lastName;
              this.selectedUsername = user.username;
            });
    }

    ngOnInit() {

        this.userService.profile()
            .then(user => this.isValidAdmin = user.isAdmin);

        this.userService.findAllUsers()
            .then(users => this.allUsers = users);
    }
}
