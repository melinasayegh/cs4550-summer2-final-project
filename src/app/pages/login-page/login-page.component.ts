import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  username: String;
  password: String;
  usernameAlert: boolean;
  fieldsAlert: boolean;

  constructor() {}

  ngOnInit() {
    this.clearAlert();
  }

  clearAlert() {
      this.usernameAlert = false;
      this.fieldsAlert = false;
  }

  // login = (username, password) => {
  //     this.clearAlert();
  //
  //     if (username == null || password == null) {
  //         this.fieldsAlert = true;
  //     } else {
  //         const user = {
  //             username: username,
  //             password: password
  //         };
  //         this.userService.login(user)
  //             .then(response => {
  //                 if (response.status === 200) {
  //                     this.router.navigate(['home']);
  //                 } else {
  //                     this.usernameAlert = true;
  //                 }
  //             });
  //     }
  // }

}
