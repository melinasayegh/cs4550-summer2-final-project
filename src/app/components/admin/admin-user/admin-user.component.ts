import { Component, OnInit } from '@angular/core';
import {UserServiceClient} from '../../../services/user.service.client';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
    selector: 'app-admin-user',
    templateUrl: './admin-user.component.html',
    styleUrls: ['./admin-user.component.css']
})
export class AdminUserComponent implements OnInit {

    selectedUserId;
    user = {
        username: String
    };
    username: String;
    password: String;
    firstName: String;
    lastName: String;
    email: String;
    isAdmin: boolean;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private userService: UserServiceClient) {
        this.route.params.subscribe(params => {
            this.getUser(params['userId']);
            this.selectedUserId = params['userId'];
        });
    }

    ngOnInit() {
        this.userService.profile()
            .then(user => {
                this.username = user.username;
                this.password = user.password;
                this.firstName = user.firstName;
                this.lastName = user.lastName;
                this.email = user.email;
            });
    }
    updateUser() {
        const newUser = {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        };
        this.userService.adminUpdatesUser(this.selectedUserId, newUser)
            .then((response) => this.router.navigate(['admin/user']));
    }
    deleteUser() {
        this.userService.adminDeletesUser(this.selectedUserId)
            .then((response) => this.router.navigate(['admin/user']));
    }
    getUser(userId) {
        this.userService.findUserById(userId)
            .then(user => {
                this.user = user;
                this.username = user.username;
                this.password = user.password;
                this.firstName = user.firstName;
                this.lastName = user.lastName;
                this.email = user.email;
            });
    }
}
