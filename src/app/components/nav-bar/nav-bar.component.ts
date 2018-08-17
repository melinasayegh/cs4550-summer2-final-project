import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  @Input() currPage: {};
  categoryDropDown: boolean;

  constructor() { }

  ngOnInit() {
    this.categoryDropDown = false;
  }

  isNotCurrentPage(pageType) {
    if (pageType !== this.currPage) {
      return true;
    } else {
      return false;
    }
  }
}
