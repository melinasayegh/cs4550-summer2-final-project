import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

    username: String;
    password: String;
    password2: String;
    fieldsAlert: boolean;
    passwordAlert: boolean;
    usernameAlert: boolean;

    ngOnInit() {
        this.clearAlerts();
    }

    clearAlerts() {
        this.fieldsAlert = false;
        this.passwordAlert = false;
        this.usernameAlert = false;
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
