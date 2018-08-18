import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  selectedTab: String;

  constructor() { }

  ngOnInit() {
  }

  selectTab(tab) {
    this.selectedTab = tab;
  }

}
