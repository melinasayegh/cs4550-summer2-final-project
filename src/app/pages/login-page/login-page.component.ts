import { Component, OnInit } from '@angular/core';
import { UserServiceClient } from '../../services/user.service.client';
import { Router } from '@angular/router';

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

  constructor(private router: Router,
              private userService: UserServiceClient) {}

  ngOnInit() {
    this.clearAlert();
  }
  clearAlert() {
      this.usernameAlert = false;
      this.fieldsAlert = false;
  }
  login(username, password) {
      this.clearAlert();
      if (username === undefined || password === undefined) {
          this.fieldsAlert = true;
      } else {
          if (username === 'admin' && password === 'admin') {
              this.userService.login(username, password)
                  .then(() => this.router.navigate(['admin']),
                      () => this.usernameAlert = true);
          } else {
              this.userService.login(username, password)
                  .then(() => this.router.navigate(['profile']),
                      () => this.usernameAlert = true);
          }
      }
  }
/*  login = (username, password) => {
    this.clearAlert();
    if (username == null || password == null) {
      this.fieldsAlert = true;
    } else {
      const user = {
        username: username,
          password: password
      };
      this.userService.login(user)
          .then(response => {
            if (response.status === 200) {
              this.router.navigate(['home']);
            } else {
              this.usernameAlert = true;
            }
          });
    }
  }*/
}
