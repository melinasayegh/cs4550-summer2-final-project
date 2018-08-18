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
        const newUser = {
            username: this.username,
            password: this.password
        };
        if (this.username === undefined) {
            this.fieldsAlertUsername = true;
        } else if (this.password === undefined) {
            this.fieldsAlertPassword1 = true;
        } else if (this.password2 === undefined) {
            this.fieldsAlertPassword2 = true;
        } else if (this.password !== this.password2) {
            this.passwordAlert = true;
        } else {
            this.userService.register(newUser)
                .then((response) =>
                    this.router.navigate(['profile']),
                    () => this.usernameAlert = true);
        }
    }
    // register = (username, password, password2) => {
    //     this.clearAlerts();
    //
    //     if (username == null || password == null || password2 == null) {
    //         this.fieldsAlert = true;
    //     } else if (password !== password2) {
    //         this.passwordAlert = true;
    //     } else {
    //         const user = {
    //             username: username,
    //             password: password,
    //             firstName: '',
    //             lastName: '',
    //             phoneNumber: '',
    //             email: '',
    //             address: '',
    //             admin: false
    //         };
    //         this.userService.register(user)
    //             .then(response => {
    //                 if (response.status === 404) {
    //                     this.usernameAlert = true;
    //                 } else {
    //                     this.router.navigate(['profile']);
    //                 }
    //             });
    //     }
    // }
}
