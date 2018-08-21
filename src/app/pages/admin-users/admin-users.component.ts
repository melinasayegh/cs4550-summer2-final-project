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
    isValidAdmin = false;

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

        this.userService.currentUser()
            .then(user => {
                if (user.username !== undefined) {

                    if ((user.username === 'admin') && (user.password === 'admin')) {
                        this.isValidAdmin = true;
                    } else {
                        this.isValidAdmin = false;
                    }
                } else {
                    this.isValidAdmin = false;
                }

            });

        this.userService.findAllUsers()
            .then(users => this.allUsers = users);
    }
}
