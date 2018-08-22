import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-friend-preview',
  templateUrl: './friend-preview.component.html',
  styleUrls: ['./friend-preview.component.css']
})
export class FriendPreviewComponent implements OnInit {

  @Input() user = <any>{};

  constructor() { }

  ngOnInit() {
  }

}
