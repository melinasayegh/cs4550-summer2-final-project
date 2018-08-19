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
  fieldsAlertUsername: boolean;
  fieldsAlertPassword: boolean;

  constructor(private router: Router,
              private userService: UserServiceClient) {}

  ngOnInit() {
    this.clearAlerts();
  }
  clearAlerts() {
      this.usernameAlert = false;
      this.fieldsAlertUsername = false;
      this.fieldsAlertPassword = false;
  }
  login(username, password) {
      this.clearAlerts();
      if (username === undefined || username === '') {
          this.fieldsAlertUsername = true;
      } else if (password === undefined || password === '') {
          this.fieldsAlertPassword = true;
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
}
