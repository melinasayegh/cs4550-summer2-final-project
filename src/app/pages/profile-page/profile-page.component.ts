import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {UserServiceClient} from '../../services/user.service.client';

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

    constructor(private router: Router, private userService: UserServiceClient) { }

    ngOnInit() {
        this.userService.profile().then(user => this.user = user);
    }

    selectTab(tab) {
        this.selectedTab = tab;
    }
}
