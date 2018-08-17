import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-category-tag',
  templateUrl: './category-tag.component.html',
  styleUrls: ['./category-tag.component.css']
})
export class CategoryTagComponent implements OnInit {

  @Input() category = <any>{};

  constructor() { }

  ngOnInit() {
  }

}
