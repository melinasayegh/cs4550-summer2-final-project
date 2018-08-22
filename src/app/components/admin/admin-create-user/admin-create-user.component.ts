import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {UserServiceClient} from '../../../services/user.service.client';

@Component({
  selector: 'app-admin-create-user',
  templateUrl: './admin-create-user.component.html',
  styleUrls: ['./admin-create-user.component.css']
})
export class AdminCreateUserComponent implements OnInit {

    username: String;
    password: String;
    firstName: String;
    lastName: String;
    email: String;
    isAdmin: boolean;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private userService: UserServiceClient) {
    }

    createUser = () => {
        const newUser = {
            username: this.username,
            password: this.password,
            firstName: this.firstName,
            lastName: this.lastName,
            email: this.email
        };
        this.userService.adminCreatesUser(newUser);
    };
    ngOnInit() {
    }
}

