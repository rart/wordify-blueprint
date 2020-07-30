import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {
  @Input() state;
  public posts_o;

  constructor() {
  }

  ngOnInit(): void {
    this.posts_o = this.state.posts;
  }

}
