import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserServiceClient } from '../../services/user.service.client';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

    username: String;
    password: String;
    password2: String;
    firstName: String;
    lastName: String;
    email: String;

    fieldsAlertUsername: boolean;
    fieldsAlertPassword1: boolean;
    fieldsAlertPassword2: boolean;
    passwordAlert: boolean;
    usernameAlert: boolean;

    constructor(private router: Router,
                private userService: UserServiceClient) { }

    ngOnInit() {
        this.clearAlerts();
    }

    clearAlerts() {
        this.fieldsAlertUsername = false;
        this.fieldsAlertPassword1 = false;
        this.fieldsAlertPassword2 = false;
        this.passwordAlert = false;
        this.usernameAlert = false;
    }

    register() {
        this.clearAlerts();
        if (this.username === undefined) {
            this.fieldsAlertUsername = true;
        } else if (this.password === undefined) {
            this.fieldsAlertPassword1 = true;
        } else if (this.password2 === undefined) {
            this.fieldsAlertPassword2 = true;
        } else if (this.password !== this.password2) {
            this.passwordAlert = true;
        } else {
            const newUser = {
                username: this.username,
                password: this.password,
                firstName: this.firstName,
                lastName: this.lastName,
                email: this.email,
                myRecipes: [],
                favoriteRecipes: [],
                reviews: [],
                friends: [],
                isAdmin: false,
                isChef: false
            };
            this.userService.register(newUser)
                .then((response) => {
                    if (response.status === 401) {
                        this.usernameAlert = true;
                    } else {
                        this.router.navigate(['profile']);
                    }
                });
        }
    }
}
