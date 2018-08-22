import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../../services/user.service.client';

@Component({
  selector: 'app-profile-settings',
  templateUrl: './profile-settings.component.html',
  styleUrls: ['./profile-settings.component.css']
})
export class ProfileSettingsComponent implements OnInit {

    user = {
        username: String
    };
    username: String;
    password: String;
    firstName: String;
    lastName: String;
    email: String;

    constructor(private router: Router, private userService: UserServiceClient) { }

    ngOnInit() {
        this.userService.currentUser()
            .then(user => {
                this.username = user.username;
                this.password = user.password;
                this.firstName = user.firstName;
                this.lastName = user.lastName;
                this.email = user.email;
            });
    }
    updateProfile() {
        const newUser = {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        };
        this.userService.updateProfile(newUser);

    }
    deleteProfile() {
        this.userService.deleteProfile()
            .then((response) => this.router.navigate(['login']));
    }
    logout() {
        this.userService.logout()
            .then(() => this.router.navigate(['login']));
    }

}
