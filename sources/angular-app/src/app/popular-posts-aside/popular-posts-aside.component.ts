import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-popular-posts-aside',
  templateUrl: './popular-posts-aside.component.html',
  styleUrls: ['./popular-posts-aside.component.scss']
})
export class PopularPostsAsideComponent implements OnInit {
  @Input() posts;

  constructor() {
  }

  ngOnInit(): void {
  }

}
