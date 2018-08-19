import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import {UserServiceClient} from '../../services/user.service.client';
import {Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

    isLoggedIn = false;
    isAdminUser = false;
    isNavbarOpen = false;
    currentUser = {};

    constructor(private router: Router,
                private userService: UserServiceClient) { }

    toggleNavbar = () => {
        this.isNavbarOpen = !this.isNavbarOpen;
    }

    logout() {
        this.userService.logout()
            .then(() => this.router.navigate(['login']));

    }
    search() {
        alert('Clicked Search');
    }
    ngOnInit() {
        this.userService.currentUser()
            .then((user) =>  {
                this.currentUser = user;
                if (user.username !== undefined) {
                    this.isLoggedIn = true;
                    if ((user.username === 'admin') && (user.password === 'admin')) {
                        this.isAdminUser = true;
                    } else {
                        this.isAdminUser = false;
                    }
                } else {
                    this.isLoggedIn = false;
                    this.isAdminUser = false;
                }
            });
        console.log(this.isLoggedIn);
    }
}
