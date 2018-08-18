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

  @Input() currPage = <any>{};
  categoryDropDown: boolean;

  constructor(private router: Router,
              private userService: UserServiceClient) { }

  ngOnInit() {
    this.categoryDropDown = false;
  }

  logout = () => {
      this.userService.logout()
          .then(() => this.router.navigate(['home']));
  }

  isNotCurrentPage = (pageType) => {
    if (pageType !== this.currPage) {
      return true;
    } else {
      return false;
    }
  }
}
